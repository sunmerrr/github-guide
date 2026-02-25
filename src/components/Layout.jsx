import { NavLink, Outlet, useLocation, ScrollRestoration } from 'react-router-dom';

const NAV = [
  { to: '/setup', label: 'Setup' },
  { to: '/first-repo', label: 'First Repo' },
  { to: '/commit', label: 'Commit' },
  { to: '/push-pull', label: 'Push & Pull' },
  { to: '/branch', label: 'Branch' },
  { to: '/pull-request', label: 'PR' },
  { to: '/cheatsheet', label: 'Cheatsheet' },
];

export default function Layout() {
  return (
    <>
      <header className="top-nav">
        <div className="top-nav-inner">
          <NavLink to="/" className="logo">
            <img src="./github.svg" alt="GitHub" style={{ width: 24, height: 24, verticalAlign: 'middle', marginRight: 8 }} />
            GitHub Guide
          </NavLink>
          <div className="nav-links">
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
