import {
  NotebookIcon,
  SunIcon,
  MoonIcon,
  XIcon,
  ChevronDownIcon,
  FolderIcon,
} from './Icons.tsx';
import type { Problem, Difficulty } from '../types.ts';

const DIFFICULTIES: Difficulty[] = ['Easy', 'Medium', 'Hard'];

interface CategoryGroup {
  label: string;
  items: Problem[];
}
interface SourceGroup {
  label: string;
  categories: Record<string, CategoryGroup>;
}

// Group problems by normalized key (lowercase, trim) so slight case differences
// (e.g. "LeetCode" and "leetcode") do not create split groups.
function buildTree(problems: Problem[]): Record<string, SourceGroup> {
  const tree: Record<string, SourceGroup> = {};
  problems.forEach((p) => {
    const srcKey = p.source.toLowerCase();
    if (!tree[srcKey]) tree[srcKey] = { label: p.source, categories: {} };

    const catKey = p.category.toLowerCase();
    const src = tree[srcKey];
    if (!src.categories[catKey]) src.categories[catKey] = { label: p.category, items: [] };
    src.categories[catKey].items.push(p);
  });
  return tree;
}

interface SidebarProps {
  problems: Problem[];
  activeDifficulties: Set<Difficulty>;
  onToggleDifficulty: (d: Difficulty) => void;
  currentProblem: Problem | undefined;
  onSelectProblem: (p: Problem) => void;
  collapsedGroups: Set<string>;
  onToggleGroup: (key: string) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export default function Sidebar({
  problems,
  activeDifficulties,
  onToggleDifficulty,
  currentProblem,
  onSelectProblem,
  collapsedGroups,
  onToggleGroup,
  theme,
  onToggleTheme,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  const tree = buildTree(problems);
  const sourceKeys = Object.keys(tree).sort((a, b) => tree[a].label.localeCompare(tree[b].label));

  return (
    <div className={'sidebar' + (mobileOpen ? ' mobile-open' : '')}>
      <div className="brand">
        <span className="brand-title">
          <NotebookIcon size={16} className="brand-icon" />
          <b>code-notebook</b>
          <span className="brand-subtitle">/ problems</span>
        </span>
        <span className="brand-actions">
          <button
            className="theme-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon size={15} /> : <MoonIcon size={15} />}
          </button>
          <button
            className="theme-btn mobile-close-btn"
            onClick={onCloseMobile}
            title="Close menu"
            aria-label="Close menu"
          >
            <XIcon size={15} />
          </button>
        </span>
      </div>

      <div className="filters">
        {DIFFICULTIES.map((d) => (
          <button
            type="button"
            key={d}
            className={'chip' + (activeDifficulties.has(d) ? ' active' : '')}
            data-d={d}
            onClick={() => onToggleDifficulty(d)}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="toc">
        {sourceKeys.map((srcKey) => {
          const { label: srcLabel, categories } = tree[srcKey];
          const srcCollapsed = collapsedGroups.has(srcKey);
          const catKeys = Object.keys(categories).sort((a, b) =>
            categories[a].label.localeCompare(categories[b].label)
          );
          const totalCount = catKeys.reduce((sum, ck) => sum + categories[ck].items.length, 0);

          return (
            <div className={'group' + (srcCollapsed ? ' collapsed' : '')} key={srcKey}>
              <div className="group-head" onClick={() => onToggleGroup(srcKey)}>
                <span className="group-title">{srcLabel}</span>
                <span className="group-meta">
                  <span className="group-count">{totalCount}</span>
                  <span className="chevron">
                    <ChevronDownIcon size={12} />
                  </span>
                </span>
              </div>
              {!srcCollapsed && (
                <div className="group-items">
                  {catKeys.map((catKey) => {
                    const { label: catLabel, items } = categories[catKey];
                    const groupKey = srcKey + '::' + catKey;
                    const catCollapsed = collapsedGroups.has(groupKey);
                    return (
                      <div className={'subgroup' + (catCollapsed ? ' collapsed' : '')} key={groupKey}>
                        <div className="subgroup-head" onClick={() => onToggleGroup(groupKey)}>
                          <span className="subgroup-title">
                            <FolderIcon size={12} className="cat-icon" />
                            {catLabel}
                          </span>
                          <span className="subgroup-meta">
                            <span className="group-count">{items.length}</span>
                            <span className="chevron">
                              <ChevronDownIcon size={11} />
                            </span>
                          </span>
                        </div>
                        {!catCollapsed && (
                          <div className="subgroup-items">
                            {items.map((p) => (
                              <div
                                key={p.id}
                                className={'item' + (p.id === currentProblem?.id ? ' active' : '')}
                                onClick={() => onSelectProblem(p)}
                              >
                                <span className={'dot ' + p.difficulty}></span>
                                <span className="num">{String(p.number).padStart(2, '0')}</span>
                                <span>{p.title}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
