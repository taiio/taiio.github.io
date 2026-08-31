import { parseProblem } from './parseProblem.ts';
import type { Problem } from '../types.ts';

// Tự động đọc TẤT CẢ file .md trong src/content/problems/, kể cả trong các
// thư mục con (vd content/problems/leetcode/two-sum.md).
// -> Thêm bài mới = thêm 1 file .md vào đúng thư mục nguồn, không cần sửa code.
const files = import.meta.glob('../content/problems/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

export function loadProblems(): Problem[] {
  const problems: Problem[] = [];
  for (const path in files) {
    // path dạng: '../content/problems/leetcode/two-sum.md' hoặc
    // '../content/problems/_template.md' (không có thư mục con)
    const rel = path.split('/content/problems/')[1];
    const parts = rel.split('/');
    const filename = parts[parts.length - 1];
    if (filename.startsWith('_')) continue; // bỏ qua file mẫu _template.md

    const nameWithoutExt = filename.replace(/\.md$/, '');
    // Ghép tên thư mục cha vào id mặc định để không bao giờ trùng giữa các
    // nguồn khác nhau, kể cả khi 2 bài ở 2 site có cùng slug.
    const folderPrefix = parts.length > 1 ? parts.slice(0, -1).join('-') + '-' : '';
    const fallbackId = folderPrefix + nameWithoutExt;

    const raw = files[path];
    problems.push(parseProblem(raw, fallbackId));
  }
  problems.sort((a, b) =>
    (a.source + a.category + String(a.number)).localeCompare(b.source + b.category + String(b.number))
  );
  return problems;
}
