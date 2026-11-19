import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import App from './App';
import projects from './data/projects.json';

const renderAt = (path) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('renders the home page', () => {
    renderAt('/');
    expect(screen.getAllByText('Allen Gleeson').length).toBeGreaterThan(0);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('renders a project page from its slug', () => {
    renderAt('/projects/aroundu');
    expect(screen.getByRole('heading', { level: 1, name: 'AroundU' })).toBeInTheDocument();
  });

  it('shows a message for an unknown project', () => {
    renderAt('/projects/does-not-exist');
    expect(screen.getByText('Project not found.')).toBeInTheDocument();
  });

  it('keeps exactly one theme class on <html> when toggling', () => {
    renderAt('/');
    const root = document.documentElement;

    for (let i = 0; i < 3; i++) {
      fireEvent.click(screen.getByRole('button', { name: /switch to (dark|light) mode/i }));
      const hasDark = root.classList.contains('dark-mode');
      const hasLight = root.classList.contains('light-mode');
      expect(hasDark).not.toBe(hasLight);
    }
    expect(localStorage.getItem('mode')).toBe('dark');
  });

  it('filters the project grid by technology', () => {
    renderAt('/projects');
    const total = projects.length;
    const javaCount = projects.filter((p) => p.fields.technologies.includes('Java')).length;
    expect(screen.getByText(`Showing ${total} of ${total} projects`)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Java' }));
    expect(screen.getByText(`Showing ${javaCount} of ${total} projects`)).toBeInTheDocument();
  });

  it('shows a not found page for unknown routes', () => {
    renderAt('/nope');
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });
});
