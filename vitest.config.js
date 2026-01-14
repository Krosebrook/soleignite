import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

/**
 * Vitest configuration for testing React components and utilities
 * Safe addition: Testing infrastructure without changing existing code
 */
export default defineConfig({
  plugins: [react()],
  test: {
    // Use jsdom environment for React component testing
    environment: 'jsdom',
    
    // Setup files to run before tests
    setupFiles: ['./src/test/setup.js'],
    
    // Enable globals so we don't need to import describe, it, expect everywhere
    globals: true,
    
    // Coverage configuration (optional)
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.config.js',
        '**/*.config.ts',
      ],
    },
    
    // Global test timeout
    testTimeout: 10000,
    
    // Include test files
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
