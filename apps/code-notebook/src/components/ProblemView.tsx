import { useState } from 'react';
import Markdown from './Markdown.tsx';
import CodeBlock from './CodeBlock.tsx';
import Disclosure from './Disclosure.tsx';
import CodeEditor from './CodeEditor.tsx';
import {
  ClockIcon,
  CpuIcon,
  UnlockIcon,
  SparklesIcon,
  LightbulbIcon,
  TerminalIcon,
  ExternalLinkIcon,
  TagIcon,
} from './Icons.tsx';
import type { Problem, Solution } from '../types.ts';

function SolutionBody({ solution }: { solution: Solution }) {
  const langs = Object.keys(solution.code);
  const [lang, setLang] = useState(langs[0]);

  return (
    <>
      <div className="solution-meta">
        <span className="solution-meta-item">
          <ClockIcon size={13} className="meta-icon" />
          <span>Time: <b>{solution.time || '—'}</b></span>
        </span>
        <span className="solution-meta-item">
          <CpuIcon size={13} className="meta-icon" />
          <span>Space: <b>{solution.space || '—'}</b></span>
        </span>
      </div>

      {/* Large disclosure wrapping entire solution */}
      <Disclosure size="lg" title="View Solution" icon={<UnlockIcon size={14} />}>
        {solution.explanation && (
          <Markdown text={solution.explanation} className="prose" style={{ padding: 0, marginBottom: 18 }} />
        )}

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

        <CodeBlock code={solution.code[lang] || ''} language={lang} />

        {solution.walkthrough.length > 0 && (
          <Disclosure
            size="lg"
            title="Step-by-step Walkthrough"
            icon={<SparklesIcon size={14} />}
            badge={solution.walkthrough.length}
          >
            <div className="disclosure-stack">
              {solution.walkthrough.map((step, i) => (
                <Disclosure key={i} size="sm" title={`Step ${i + 1}`}>
                  <div className="prose-sm">{step}</div>
                </Disclosure>
              ))}
            </div>
          </Disclosure>
        )}
      </Disclosure>
    </>
  );
}

export default function ProblemView({ problem }: { problem: Problem }) {
  const [approachIdx, setApproachIdx] = useState(0);
  const solution = problem.solutions[approachIdx];
  const hasTemplate = Object.keys(problem.template || {}).length > 0;

  return (
    <div className="content-inner">
      <div className="ptitle">
        <h1>
          {problem.number}. {problem.title}
        </h1>
        <span className={'badge ' + problem.difficulty}>{problem.difficulty}</span>
      </div>
      <div className="meta-row">
        <a href={problem.url} target="_blank" rel="noreferrer" className="source-link">
          <span>{problem.source}</span>
          <ExternalLinkIcon size={11} className="ext-icon" />
        </a>
        {problem.tags.map((tg) => (
          <span className="tag" key={tg}>
            <TagIcon size={10} className="tag-icon" />
            <span>{tg}</span>
          </span>
        ))}
      </div>

      {/* Problem description */}
      <Markdown text={problem.description} />

      {/* Hints */}
      {problem.hints.length > 0 && (
        <Disclosure size="lg" title="Hints" icon={<LightbulbIcon size={14} />} badge={problem.hints.length}>
          <div className="disclosure-stack">
            {problem.hints.map((hint, i) => (
              <Disclosure key={i} size="sm" title={`Hint ${i + 1}`}>
                <div className="prose-sm">{hint}</div>
              </Disclosure>
            ))}
          </div>
        </Disclosure>
      )}

      {/* Try-it-yourself code editor */}
      {hasTemplate && (
        <Disclosure
          size="lg"
          title="Try it yourself (practice before viewing solution)"
          icon={<TerminalIcon size={14} />}
        >
          <CodeEditor templates={problem.template} />
        </Disclosure>
      )}

      {solution && (
        <>
          <div className="section-label">Solutions</div>
          <div className="toggle-group">
            {problem.solutions.map((s, i) => (
              <button
                key={s.approach}
                type="button"
                className={'toggle-btn' + (i === approachIdx ? ' active' : '')}
                onClick={() => setApproachIdx(i)}
              >
                {s.approach}
              </button>
            ))}
          </div>

          {/* Reset child disclosures on approach switch via key */}
          <SolutionBody key={approachIdx} solution={solution} />
        </>
      )}
    </div>
  );
}
