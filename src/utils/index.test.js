import { describe, it, expect } from 'vitest';
import { createPageUrl } from '../utils';

/**
 * Tests for utility functions
 * Safe addition: Testing existing working code without modifying it
 */

describe('createPageUrl', () => {
  it('should convert page name to URL path', () => {
    expect(createPageUrl('Landing')).toBe('/Landing');
  });

  it('should replace spaces with hyphens', () => {
    expect(createPageUrl('My Page')).toBe('/My-Page');
  });

  it('should handle multiple spaces', () => {
    expect(createPageUrl('My Multi Word Page')).toBe('/My-Multi-Word-Page');
  });

  it('should handle empty string', () => {
    expect(createPageUrl('')).toBe('/');
  });

  it('should handle string with no spaces', () => {
    expect(createPageUrl('Contact')).toBe('/Contact');
  });
});
