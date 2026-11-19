import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(cleanup);

// jsdom doesn't implement these browser APIs.
window.scrollTo = () => {};

class NoopObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
}
window.IntersectionObserver ??= NoopObserver;
window.ResizeObserver ??= NoopObserver;
