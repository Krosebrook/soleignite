import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

/**
 * Test setup file
 * Automatically cleans up after each test to prevent memory leaks
 * Safe addition: Only used in test environment
 */

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

