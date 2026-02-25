import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Setup from './pages/Setup';
import FirstRepo from './pages/FirstRepo';
import Commit from './pages/Commit';
import PushPull from './pages/PushPull';
import Branch from './pages/Branch';
import PullRequest from './pages/PullRequest';
import Conflict from './pages/Conflict';
import Cheatsheet from './pages/Cheatsheet';
import Glossary from './pages/Glossary';

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/setup', element: <Setup /> },
      { path: '/first-repo', element: <FirstRepo /> },
      { path: '/commit', element: <Commit /> },
      { path: '/push-pull', element: <PushPull /> },
      { path: '/branch', element: <Branch /> },
      { path: '/pull-request', element: <PullRequest /> },
      { path: '/conflict', element: <Conflict /> },
      { path: '/cheatsheet', element: <Cheatsheet /> },
      { path: '/glossary', element: <Glossary /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
