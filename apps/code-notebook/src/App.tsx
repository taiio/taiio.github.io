import { useEffect, useMemo, useState } from 'react';
import { loadProblems } from './lib/loadProblems.ts';
import Sidebar from './components/Sidebar.tsx';
import ProblemView from './components/ProblemView.tsx';
import { MenuIcon } from './components/Icons.tsx';
import type { Difficulty, ThemeName } from './types.ts';

export default function App() {
  const problems = useMemo(() => loadProblems(), []);

  const [currentId, setCurrentId] = useState<string | undefined>(problems[0]?.id);
  const [activeDifficulties, setActiveDifficulties] = useState<Set<Difficulty>>(
    new Set(['Easy', 'Medium', 'Hard'])
  );
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());
  const [theme, setTheme] = useState<ThemeName>(
    () => (localStorage.getItem('cn-theme') as ThemeName | null) || 'dark'
  );
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cn-theme', theme);
  }, [theme]);

  const currentProblem = problems.find((p) => p.id === currentId) || problems[0];

  const visibleProblems = problems.filter((p) => activeDifficulties.has(p.difficulty));

  const toggleDifficulty = (d: Difficulty) => {
    setActiveDifficulties((prev) => {
      const next = new Set(prev);
      if (next.has(d)) next.delete(d);
      else next.add(d);
      return next;
    });
  };

  const toggleGroup = (key: string) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const selectProblem = (p: { id: string }) => {
    setCurrentId(p.id);
    setMobileSidebarOpen(false); // auto-close drawer on mobile when problem selected
  };

  if (!currentProblem) {
    return (
      <div style={{ padding: 40, fontFamily: 'monospace', color: 'var(--text-muted)' }}>
        No problems found in src/content/problems/. Add a .md file to get started.
      </div>
    );
  }

  return (
    <div className="app" data-theme={theme}>
      <Sidebar
        problems={visibleProblems}
        activeDifficulties={activeDifficulties}
        onToggleDifficulty={toggleDifficulty}
        currentProblem={currentProblem}
        onSelectProblem={selectProblem}
        collapsedGroups={collapsedGroups}
        onToggleGroup={toggleGroup}
        theme={theme}
        onToggleTheme={() => setTheme((th) => (th === 'dark' ? 'light' : 'dark'))}
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {mobileSidebarOpen && <div className="scrim" onClick={() => setMobileSidebarOpen(false)} />}

      <div className="main">
        <div className="mobile-topbar">
          <button
            type="button"
            className="hamburger-btn"
            onClick={() => setMobileSidebarOpen(true)}
            title="Open menu"
            aria-label="Open menu"
          >
            <MenuIcon size={18} />
          </button>
          <span className="mobile-topbar-title">
            {currentProblem.number}. {currentProblem.title}
          </span>
        </div>
        <div className="content">
          {/* key by problem.id: remounts completely on problem switch so toggles reset */}
          <ProblemView key={currentProblem.id} problem={currentProblem} />
        </div>
      </div>
    </div>
  );
}
