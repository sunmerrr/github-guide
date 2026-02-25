import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, ScrollRestoration } from 'react-router-dom';

const NAV_MAIN = [
  { to: '/setup', label: 'Setup' },
  { to: '/first-repo', label: 'First Repo' },
  { to: '/commit', label: 'Commit' },
  { to: '/push-pull', label: 'Push & Pull' },
];

const NAV_ADVANCED = [
  { to: '/branch', label: 'Branch' },
  { to: '/pull-request', label: 'PR' },
  { to: '/conflict', label: 'Conflict' },
];

const NAV_TIP = [
  { to: '/cheatsheet', label: 'Cheatsheet' },
  { to: '/glossary', label: 'Glossary' },
];

function NavLinks({ items }) {
  return items.map((n) => (
    <NavLink key={n.to} to={n.to} className={({ isActive }) => isActive ? 'active' : ''}>
      {n.label}
    </NavLink>
  ));
}

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
          <div className="nav-links nav-links-desktop">
            <NavLinks items={NAV_MAIN} />
            <span className="nav-divider" />
            <NavLinks items={NAV_ADVANCED} />
            <span className="nav-divider" />
            <NavLinks items={NAV_TIP} />
          </div>
          <button
            className="hamburger"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="nav-links nav-links-mobile">
            <span className="nav-section-label">기본</span>
            <NavLinks items={NAV_MAIN} />
            <span className="nav-divider" />
            <span className="nav-section-label">심화</span>
            <NavLinks items={NAV_ADVANCED} />
            <span className="nav-divider" />
            <span className="nav-section-label">참고</span>
            <NavLinks items={NAV_TIP} />
          </div>
        )}
      </header>
      <main className="page-content">
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}
