import { describe, it, expect } from 'vitest';
import { formatUptime } from '@/utils/formatUptime';

describe('formatUptime', () => {
  it('should format 0 seconds correctly', () => {
    expect(formatUptime(0)).toBe('0h 0m 0s');
  });

  it('should format seconds only', () => {
    expect(formatUptime(45)).toBe('0h 0m 45s');
  });

  it('should format minutes and seconds', () => {
    expect(formatUptime(90)).toBe('0h 1m 30s');
  });

  it('should format hours, minutes, and seconds', () => {
    expect(formatUptime(3661)).toBe('1h 1m 1s');
  });

  it('should handle exact hour boundaries', () => {
    expect(formatUptime(3600)).toBe('1h 0m 0s');
  });

  it('should handle exact minute boundaries', () => {
    expect(formatUptime(60)).toBe('0h 1m 0s');
  });

  it('should handle large values', () => {
    expect(formatUptime(86400)).toBe('24h 0m 0s'); // 24 hours
  });

  it('should handle complex time values', () => {
    expect(formatUptime(7384)).toBe('2h 3m 4s');
  });
});
