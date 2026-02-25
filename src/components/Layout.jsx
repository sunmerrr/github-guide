import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, ScrollRestoration } from 'react-router-dom';

const NAV = [
  { to: '/setup', label: 'Setup' },
  { to: '/first-repo', label: 'First Repo' },
  { to: '/commit', label: 'Commit' },
  { to: '/push-pull', label: 'Push & Pull' },
  { to: '/branch', label: 'Branch' },
  { to: '/pull-request', label: 'PR' },
  { to: '/cheatsheet', label: 'Cheatsheet' },
  { to: '/glossary', label: 'Glossary' },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="top-nav">
        <div className="top-nav-inner">
          <NavLink to="/" className="logo">
            <img src="./github.svg" alt="GitHub" style={{ width: 24, height: 24, verticalAlign: 'middle', marginRight: 8 }} />
            GitHub Guide
          </NavLink>
          <button
            className="hamburger"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => isActive ? 'active' : ''}>
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>
      <main className="page-content">
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}
