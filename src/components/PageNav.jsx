import { Link } from 'react-router-dom';

const PAGES = [
  { path: '/', title: 'Home' },
  { path: '/setup', title: 'Setup' },
  { path: '/first-repo', title: 'First Repo' },
  { path: '/commit', title: 'Commit' },
  { path: '/push-pull', title: 'Push & Pull' },
  { path: '/branch', title: 'Branch' },
  { path: '/pull-request', title: 'Pull Request' },
  { path: '/conflict', title: 'Conflict' },
  { path: '/cheatsheet', title: 'Cheatsheet' },
  { path: '/glossary', title: 'Glossary' },
];

export default function PageNav({ current }) {
  const idx = PAGES.findIndex((p) => p.path === current);
  const prev = idx > 0 ? PAGES[idx - 1] : null;
  const next = idx < PAGES.length - 1 ? PAGES[idx + 1] : null;

  return (
    <nav className="page-nav">
      {prev ? (
        <Link to={prev.path}>
          <span className="nav-label">Previous</span>
          <span className="nav-title">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link to={next.path} className="next">
          <span className="nav-label">Next</span>
          <span className="nav-title">{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
