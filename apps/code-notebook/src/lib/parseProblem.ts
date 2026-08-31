// Parser rất nhẹ, không phụ thuộc thư viện ngoài — tự đọc:
// 1) Frontmatter dạng YAML đơn giản (key: value, list bằng dấu phẩy hoặc "- item")
// 2) Các section trong body bằng heading "## " và "### "
//
// Định dạng 1 file problem.md, xem README.md hoặc content/problems/_template.md
// để biết chi tiết.

import type { Problem, Solution } from '../types.ts';

type Meta = Record<string, string | string[]>;

function parseFrontmatter(raw: string): { meta: Meta; body: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const [, fmBlock, body] = match;
  const meta: Meta = {};
  const lines = fmBlock.split('\n');
  let currentKey: string | null = null;
  for (const line of lines) {
    const listItem = line.match(/^\s*-\s+(.*)$/);
    if (listItem && currentKey) {
      const existing = meta[currentKey];
      const arr = Array.isArray(existing) ? existing : [];
      arr.push(listItem[1].trim());
      meta[currentKey] = arr;
      continue;
    }
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (kv) {
      const [, key, value] = kv;
      currentKey = key;
      if (value.trim() === '') {
        meta[key] = []; // sẽ được điền bởi các dòng "- item" tiếp theo
      } else if (value.includes(',')) {
        meta[key] = value.split(',').map((s) => s.trim()).filter(Boolean);
      } else {
        meta[key] = value.trim();
      }
    }
  }
  return { meta, body };
}

function isDirectiveLine(line: string): boolean {
  const t = line.trim();
  return t.startsWith('## ') || t.startsWith('### ') || /^```/.test(t);
}

interface RawBlock {
  title: string;
  lines: string[];
}

// Tách body thành các block theo heading "## " (level 2)
function splitByH2(body: string): RawBlock[] {
  const lines = body.split('\n');
  const blocks: RawBlock[] = [];
  let current: RawBlock | null = null;
  for (const line of lines) {
    const h2 = line.match(/^##\s+(.*)$/);
    if (h2) {
      if (current) blocks.push(current);
      current = { title: h2[1].trim(), lines: [] };
    } else if (current) {
      current.lines.push(line);
    }
  }
  if (current) blocks.push(current);
  return blocks;
}

// Tách 1 block solution thành: meta list (- time:, - space:), "### Explanation",
// "### Walkthrough", và các fenced code block ```lang ... ```
function parseSolutionBlock(titleLine: string, lines: string[]): Solution {
  const approach = titleLine.replace(/^Solution:\s*/i, '').trim();
  const sol: Solution = { approach, time: '', space: '', explanation: '', walkthrough: [], code: {} };

  let i = 0;
  // dòng đầu có thể là "- time: O(n)" / "- space: O(n)"
  while (i < lines.length) {
    const m = lines[i].match(/^\s*-\s*(time|space)\s*:\s*(.*)$/i);
    if (m) {
      const key = m[1].toLowerCase() as 'time' | 'space';
      sol[key] = m[2].trim();
      i++;
    } else break;
  }

  while (i < lines.length) {
    const h3 = lines[i].match(/^###\s+(.*)$/);
    const fence = lines[i].match(/^```(\w+)/);
    if (h3) {
      const section = h3[1].trim().toLowerCase();
      i++;
      const acc: string[] = [];
      while (i < lines.length && !isDirectiveLine(lines[i])) {
        acc.push(lines[i]);
        i++;
      }
      if (section === 'explanation') sol.explanation = acc.join('\n').trim();
      else if (section === 'walkthrough') {
        sol.walkthrough = acc
          .map((l) => l.trim())
          .filter((l) => l.startsWith('- '))
          .map((l) => l.slice(2).trim());
      }
    } else if (fence) {
      const lang = fence[1];
      i++;
      const acc: string[] = [];
      while (i < lines.length && !/^```/.test(lines[i].trim())) {
        acc.push(lines[i]);
        i++;
      }
      i++; // bỏ qua dòng ``` đóng
      sol.code[lang] = acc.join('\n');
    } else {
      i++;
    }
  }
  return sol;
}

// Dùng cho "## Template": chỉ chứa các fenced code block, mỗi cái là 1 ngôn ngữ.
function parseCodeFenceMap(lines: string[]): Record<string, string> {
  const code: Record<string, string> = {};
  let i = 0;
  while (i < lines.length) {
    const fence = lines[i].match(/^```(\w+)/);
    if (fence) {
      const lang = fence[1];
      i++;
      const acc: string[] = [];
      while (i < lines.length && !/^```/.test(lines[i].trim())) {
        acc.push(lines[i]);
        i++;
      }
      i++; // bỏ qua ``` đóng
      code[lang] = acc.join('\n');
    } else {
      i++;
    }
  }
  return code;
}

// Chuẩn hoá danh sách tag: trim khoảng trắng, bỏ tag rỗng, khử trùng lặp
// (không phân biệt hoa/thường — "Array" và "array" tính là 1), giữ lại cách
// viết hoa/thường của lần xuất hiện đầu tiên, rồi sắp xếp alphabet để hiển
// thị nhất quán giữa các bài toán.
function normalizeTags(list: string[]): string[] {
  const seen = new Map<string, string>(); // key: lowercase -> giá trị gốc đầu tiên
  for (const raw of list) {
    const tag = String(raw).trim();
    if (!tag) continue;
    const key = tag.toLowerCase();
    if (!seen.has(key)) seen.set(key, tag);
  }
  return Array.from(seen.values()).sort((a, b) => a.localeCompare(b));
}

function metaString(meta: Meta, key: string): string | undefined {
  const v = meta[key];
  return Array.isArray(v) ? v[0] : v;
}

function metaList(meta: Meta, key: string): string[] {
  const v = meta[key];
  if (Array.isArray(v)) return v;
  if (typeof v === 'string') return [v];
  return [];
}

export function parseProblem(raw: string, fallbackId: string): Problem {
  const { meta, body } = parseFrontmatter(raw);
  const blocks = splitByH2(body);

  const tagList = metaList(meta, 'tags');
  const difficultyRaw = metaString(meta, 'difficulty') || 'Easy';

  const problem: Problem = {
    id: metaString(meta, 'slug') || fallbackId,
    number: parseInt(metaString(meta, 'number') || '', 10) || 0,
    title: metaString(meta, 'title') || 'Untitled',
    source: (metaString(meta, 'source') || 'Custom').trim(),
    difficulty: (['Easy', 'Medium', 'Hard'].includes(difficultyRaw) ? difficultyRaw : 'Easy') as Problem['difficulty'],
    tags: normalizeTags(tagList),
    category: (metaString(meta, 'category') || tagList[0] || 'Other').trim(),
    url: metaString(meta, 'url') || '#',
    description: '',
    hints: [],
    template: {},
    solutions: [],
  };

  for (const block of blocks) {
    if (/^problem$/i.test(block.title)) {
      problem.description = block.lines.join('\n').trim();
    } else if (/^hints$/i.test(block.title)) {
      problem.hints = block.lines
        .map((l) => l.trim())
        .filter((l) => l.startsWith('- '))
        .map((l) => l.slice(2).trim());
    } else if (/^template$/i.test(block.title)) {
      problem.template = parseCodeFenceMap(block.lines);
    } else if (/^solution:/i.test(block.title)) {
      problem.solutions.push(parseSolutionBlock(block.title, block.lines));
    }
  }

  return problem;
}
