# Code Notebook

Trang tổng hợp bài toán LeetCode / HackerRank / NeetCode... kèm nhiều lời giải,
nhiều ngôn ngữ, hint có thể ẩn/hiện, và giải thích code từng bước.

Xây bằng **React + TypeScript + Vite**. Nội dung là các file **Markdown**,
không cần đụng code khi thêm bài mới.

## Chạy thử

```bash
npm install
npm run dev
```

Kiểm tra type và build production:

```bash
npm run typecheck
npm run build
npm run preview
```

## Thêm một bài toán mới

1. Chọn đúng thư mục nguồn trong `src/content/problems/` (vd `leetcode/`,
   `hackerrank/`, `neetcode/`). Nếu là nguồn mới, tạo thư mục mới cùng tên
   (slug thường, không dấu, vd `codeforces/`).
2. Copy file `_template.md` (ở thư mục gốc `content/problems/`) vào đúng thư
   mục nguồn, đổi tên thành slug của bài (vd `merge-intervals.md`).
3. Điền nội dung — có thể copy nguyên đề bài từ web gốc dán thẳng vào phần
   `## Problem` (hỗ trợ Markdown đầy đủ).
4. Lưu file. Chạy `npm run dev` (hoặc reload nếu đang chạy sẵn) — bài mới tự
   xuất hiện trong sidebar, không cần import hay đăng ký gì thêm.

Vì id nội bộ của mỗi bài được tự sinh từ đường dẫn thư mục
(`<nguồn>-<slug-file>`), 2 bài trùng tên slug ở 2 nguồn khác nhau (vd cả
LeetCode và HackerRank đều có 1 bài tên "two-sum.md") vẫn không bao giờ đụng
id với nhau — đây là lý do có thêm cấp thư mục theo nguồn.

Toàn bộ việc đọc file được xử lý tự động bởi `src/lib/loadProblems.ts` (dùng
`import.meta.glob` của Vite để quét mọi file `.md` trong mọi thư mục con).

## Tính năng UI

- **Toggle phân tầng**: Hints, "Xem lời giải", và "Giải thích code từng bước"
  đều là toggle lớn có thể chứa toggle nhỏ bên trong, dùng chung component
  `src/components/Disclosure.tsx`. Chọn xong 1 cách giải, mặc định chỉ thấy
  time/space — phải bấm "🔓 Xem lời giải" mới thấy code, tránh bị lộ đáp án
  khi đang tự làm. **Mỗi cách giải có walkthrough riêng** — không dùng chung
  1 đoạn giải thích cho nhiều approach (xem ví dụ trong `two-sum.md`: Brute
  Force và Hash Map có 2 walkthrough hoàn toàn khác nhau).
- **Đề bài**: hiển thị markdown thường, không có line number.
- **Code (xem lời giải)**: luôn có line number (gutter bên trái), syntax
  highlight theo ngôn ngữ, nút Copy.
- **Tự viết code — có highlight màu khi gõ**: nếu file có mục `## Template`,
  sẽ hiện 1 toggle lớn "✏️ Tự viết code" chứa 1 editor thật (không phải
  textarea trơn) — code được tô màu cú pháp ngay khi gõ theo ngôn ngữ đang
  chọn, có phím Tab để thụt lề. Đây vẫn là sổ nháp thuần client, chưa hỗ trợ
  chạy/chấm code.
- **Sáng / Tối**: nút Sun / Moon ở góc trên sidebar, lưu lựa chọn vào `localStorage`.
- **Sidebar 3 cấp**: Nguồn (LeetCode/HackerRank/NeetCode...) → Loại bài toán
  (`category` trong frontmatter, vd "Array & Hashing", "Stack"...) → Tên bài
  toán. Mỗi cấp collapse độc lập. Việc gộp nhóm không phân biệt hoa/thường —
  lỡ 1 file viết "leetcode" và file khác viết "LeetCode" vẫn gộp chung 1
  nhóm, không bị tách đôi.
- **Tag chuẩn hoá tự động**: tag trong `tags:` được tự động trim khoảng
  trắng, khử trùng lặp (không phân biệt hoa/thường, vd "Array" và "array"
  tính là 1) và sắp xếp alphabet khi hiển thị — bạn không cần tự kiểm tra
  trùng lặp khi viết file.
- Đổi bài toán hoặc đổi cách giải sẽ tự đóng lại toàn bộ toggle (nhờ dùng
  `key` để React remount đúng chỗ) — không bị "rò rỉ" trạng thái mở giữa các
  bài khác nhau.
- **Icon SVG & Giao diện chuẩn tiếng Anh**: Sử dụng bộ icon SVG vector sắc nét
  (brand, theme, copy, complexity, hints, walkthrough...) và giao diện chuẩn
  tiếng Anh tối giản, trực quan.
- **Responsive**: dưới 860px, sidebar biến thành menu trượt (nút hamburger ở top bar
  mobile), đóng bằng cách bấm ✕, chọn bài, hoặc chạm ra ngoài (scrim).

## TypeScript là ngôn ngữ ưu tiên

## Chuẩn nội dung (đọc trước khi thêm nhiều bài)

Để mọi file `.md` trình bày nhất quán, luôn theo đúng thứ tự field này trong
frontmatter:

```
title → number → source → category → difficulty → tags → url
```

Quy ước:

- **source**: viết đúng 1 kiểu cho mỗi trang trong toàn bộ dự án (luôn
  "LeetCode", không đổi qua lại "Leetcode"/"leetcode"). Việc gộp nhóm ở
  sidebar không phân biệt hoa/thường nên sẽ không vỡ layout nếu lỡ gõ khác,
  nhưng viết nhất quán giúp file nguồn dễ đọc và dễ tìm hơn.
- **category**: đây là cấp 2 trong sidebar — dùng chung 1 tên cho các bài
  cùng chủ đề (luôn "Array & Hashing", không lúc thì viết tắt lúc thì viết
  đầy đủ).
- **tags**: viết Title Case, phân tách bằng dấu phẩy (vd `Hash Table, Two
  Pointers`). Không cần tự kiểm tra trùng lặp — parser tự trim, khử trùng
  (không phân biệt hoa/thường) và sắp xếp alphabet khi hiển thị.
- **number**: số thứ tự trên trang gốc, dùng để sắp xếp các bài trong cùng
  1 category.
- **ngôn ngữ code**: TypeScript luôn đặt fence đầu tiên (xem mục "TypeScript
  là ngôn ngữ ưu tiên" phía trên).
- **walkthrough**: viết riêng cho từng `## Solution`, không copy nguyên 1
  walkthrough sang nhiều approach khác nhau.

File `src/content/problems/_template.md` là bản chuẩn để copy khi thêm bài
mới — đã áp dụng đúng thứ tự và quy ước trên, kèm ghi chú chi tiết ở cuối
file.

## Định dạng 1 file problem.md

```markdown
---
title: Tên bài toán
number: 1
source: LeetCode        # LeetCode / HackerRank / NeetCode / ...
category: Array & Hashing  # cấp 2 trong sidebar (loại bài toán)
difficulty: Easy        # Easy / Medium / Hard
tags: Array, Hash Table # Title Case, phân tách bằng dấu phẩy
url: https://link-goc
---

## Problem
Nội dung đề bài (Markdown).

## Hints
- Gợi ý 1 (xoá cả mục này nếu bài không cần hint)
- Gợi ý 2

## Template
(tuỳ chọn — mã khởi tạo cho khu vực "Tự viết code")

\`\`\`typescript
function solve(): void {}
\`\`\`

## Solution: Tên cách giải
- time: O(n)
- space: O(1)

### Explanation
Giải thích ý tưởng chung.

### Walkthrough
- Bước 1 (xoá cả mục này nếu không cần giải thích từng bước)
- Bước 2

\`\`\`typescript
function solve(): void { /* ... */ }
\`\`\`

\`\`\`python
def solve(): ...
\`\`\`

## Solution: Cách giải thứ 2 (nếu có)
...
```

- Có thể lặp lại `## Solution: ...` bao nhiêu lần tuỳ ý — mỗi cái là 1 toggle
  trong khu vực "Solutions".
- Trong mỗi solution, lặp lại các block code — ngôn ngữ được nhận diện từ tên
  sau dấu \`\`\` (\`\`\`typescript, \`\`\`python, \`\`\`java, \`\`\`cpp...) và
  tự hiện thành tab chọn ngôn ngữ. **Fence đầu tiên = tab mặc định** — luôn
  đặt \`\`\`typescript lên đầu.
- `## Hints` và `### Walkthrough` đều tuỳ chọn — không có thì UI không hiện
  toggle tương ứng.

## Cấu trúc thư mục

```
src/
  content/problems/
    _template.md            <- khung mẫu trống, copy vào thư mục nguồn khi thêm bài
    leetcode/                <- MỌI file .md ở đây là 1 bài của LeetCode
      two-sum.md
      valid-parentheses.md
    hackerrank/
      fizzbuzz.md
    neetcode/
      binary-search.md
  lib/
    parseProblem.ts        parser: markdown -> object (typed Problem/Solution)
    loadProblems.ts        scans problem md files and parses them
    hljsSetup.ts           shared highlight.js configuration
  components/
    Icons.tsx              vector SVG icons library
    Sidebar.tsx            3-level problem navigation tree
    ProblemView.tsx        problem description, hints, try yourself, solutions
    Disclosure.tsx         reusable nested accordion disclosure
    CodeEditor.tsx         in-browser scratchpad code editor with syntax highlighting
    CodeBlock.tsx          syntax highlighted code block with line numbers & copy
    Markdown.tsx           markdown renderer using marked
  types.ts                 common types (Problem, Solution, Difficulty...)
  App.tsx
  main.tsx
```

## Thêm ngôn ngữ highlight mới

Mở `src/lib/hljsSetup.ts` (dùng chung cho cả CodeBlock lẫn CodeEditor), thêm:

```ts
import ruby from 'highlight.js/lib/languages/ruby';
hljs.registerLanguage('ruby', ruby);
```

rồi dùng \`\`\`ruby trong file markdown.

## Thư viện dùng

- `marked` — render Markdown -> HTML
- `highlight.js` (core, chỉ đăng ký ngôn ngữ cần dùng để giữ bundle nhỏ)
- `typescript` (dev) — type-check, không chặn `vite build` nếu có lỗi type
  (build dùng esbuild transpile-only); chạy `npm run typecheck` riêng để
  kiểm tra nghiêm ngặt.

Không dùng framework CMS hay backend — toàn bộ là file tĩnh, phù hợp deploy lên
Vercel/Netlify/GitHub Pages bằng `npm run build` rồi publish thư mục `dist/`.
