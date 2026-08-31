import { marked } from 'marked';
import type { CSSProperties } from 'react';

marked.setOptions({ breaks: true });

interface MarkdownProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function Markdown({ text, className = 'prose', style }: MarkdownProps) {
  return (
    <div
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: marked.parse(text || '') as string }}
    />
  );
}
