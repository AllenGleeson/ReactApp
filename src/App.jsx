import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import NotFoundPage from './pages/NotFoundPage';

function getInitialDarkMode() {
  try {
    const stored = localStorage.getItem('mode');
    if (stored) return stored === 'dark';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  } catch {
    return false;
  }
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark-mode', isDarkMode);
    root.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((dark) => {
      const next = !dark;
      try {
        localStorage.setItem('mode', next ? 'dark' : 'light');
      } catch {
        // Storage can be unavailable (private mode); the toggle still works.
      }
      return next;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
