import { useEffect, useRef, useState, type ChangeEvent, type KeyboardEvent } from 'react';
import hljs from '../lib/hljsSetup.ts';
import { RotateCcwIcon, InfoIcon } from './Icons.tsx';

interface CodeEditorProps {
  templates: Record<string, string>;
}

// Note: this component is remounted when switching problems (ProblemView is keyed
// by problem.id in App.tsx), so state initialized from `templates` is always up-to-date.
export default function CodeEditor({ templates }: CodeEditorProps) {
  const langs = Object.keys(templates || {});
  const [lang, setLang] = useState(langs[0]);
  const [valuesByLang, setValuesByLang] = useState<Record<string, string>>(() => ({ ...templates }));

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlightCodeRef = useRef<HTMLElement>(null);
  const highlightPreRef = useRef<HTMLPreElement>(null);

  const value = valuesByLang[lang] ?? '';

  // Re-highlight whenever content or language changes. The <pre>/<code> sits
  // underneath, while <textarea> sits on top with transparent text for editing.
  useEffect(() => {
    if (highlightCodeRef.current) {
      highlightCodeRef.current.removeAttribute('data-highlighted');
      hljs.highlightElement(highlightCodeRef.current);
    }
  }, [value, lang]);

  if (langs.length === 0) return null;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const v = e.target.value;
    setValuesByLang((prev) => ({ ...prev, [lang]: v }));
  };

  const handleScroll = () => {
    if (highlightPreRef.current && textareaRef.current) {
      highlightPreRef.current.scrollTop = textareaRef.current.scrollTop;
      highlightPreRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };

  // Pressing Tab inserts 2 spaces instead of moving focus
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Tab') return;
    e.preventDefault();
    const el = e.currentTarget;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const next = value.slice(0, start) + '  ' + value.slice(end);
    setValuesByLang((prev) => ({ ...prev, [lang]: next }));
    requestAnimationFrame(() => {
      el.selectionStart = el.selectionEnd = start + 2;
    });
  };

  return (
    <div>
      <div className="lang-row">
        {langs.map((l) => (
          <button
            key={l}
            type="button"
            className={'lang-pill' + (l === lang ? ' active' : '')}
            onClick={() => setLang(l)}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="code-editor-wrap">
        <pre className="code-editor-highlight" ref={highlightPreRef} aria-hidden="true">
          <code ref={highlightCodeRef} className={'hljs language-' + lang}>
            {value + '\n'}
          </code>
        </pre>
        <textarea
          ref={textareaRef}
          className="code-editor-input"
          spellCheck={false}
          wrap="off"
          value={value}
          onChange={handleChange}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="editor-actions">
        <button
          type="button"
          className="ghost-btn"
          onClick={() => setValuesByLang((prev) => ({ ...prev, [lang]: templates[lang] }))}
        >
          <RotateCcwIcon size={12} />
          <span>Reset to template</span>
        </button>
        <span className="editor-hint">
          <InfoIcon size={12} className="info-icon" />
          <span>Scratchpad only — code execution isn't supported yet.</span>
        </span>
      </div>
    </div>
  );
}
