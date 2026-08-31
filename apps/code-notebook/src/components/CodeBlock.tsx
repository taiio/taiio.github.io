import { useEffect, useRef, useState } from 'react';
import hljs from '../lib/hljsSetup.ts';
import { CopyIcon, CheckIcon } from './Icons.tsx';

interface CodeBlockProps {
  code: string;
  language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.removeAttribute('data-highlighted');
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  const lineCount = code.split('\n').length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div className="code-wrap">
      <button
        type="button"
        className={'copy-btn' + (copied ? ' copied' : '')}
        onClick={handleCopy}
        title={copied ? 'Copied to clipboard' : 'Copy code'}
        aria-label={copied ? 'Copied to clipboard' : 'Copy code'}
      >
        {copied ? (
          <>
            <CheckIcon size={12} className="copy-icon" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <CopyIcon size={12} className="copy-icon" />
            <span>Copy</span>
          </>
        )}
      </button>
      <div className="code-gutter" aria-hidden="true">
        {lineNumbers.map((n) => (
          <div key={n}>{n}</div>
        ))}
      </div>
      <pre>
        <code ref={codeRef} className={'hljs language-' + language}>
          {code}
        </code>
      </pre>
    </div>
  );
}
