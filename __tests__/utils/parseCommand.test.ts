import { describe, it, expect } from 'vitest';
import { parseCommand } from '@/utils/parseCommand';

describe('parseCommand', () => {
  describe('Basic parsing', () => {
    it('should parse a simple command with no arguments', () => {
      const result = parseCommand('help');
      expect(result).toEqual({
        command: 'help',
        args: [],
      });
    });

    it('should parse a command with a single argument', () => {
      const result = parseCommand('cat resume.txt');
      expect(result).toEqual({
        command: 'cat',
        args: ['resume.txt'],
      });
    });

    it('should parse a command with multiple arguments', () => {
      const result = parseCommand('git commit -m "Initial commit"');
      expect(result).toEqual({
        command: 'git',
        args: ['commit', '-m', '"Initial', 'commit"'],
      });
    });
  });

  describe('Edge cases', () => {
    it('should handle empty string', () => {
      const result = parseCommand('');
      expect(result).toEqual({
        command: '',
        args: [],
      });
    });

    it('should handle whitespace-only string', () => {
      const result = parseCommand('   ');
      expect(result).toEqual({
        command: '',
        args: [],
      });
    });

    it('should handle leading whitespace', () => {
      const result = parseCommand('   help');
      expect(result).toEqual({
        command: 'help',
        args: [],
      });
    });

    it('should handle trailing whitespace', () => {
      const result = parseCommand('help   ');
      expect(result).toEqual({
        command: 'help',
        args: [],
      });
    });

    it('should handle multiple spaces between command and arguments', () => {
      const result = parseCommand('cat     resume.txt');
      expect(result).toEqual({
        command: 'cat',
        args: ['resume.txt'],
      });
    });

    it('should handle multiple spaces between arguments', () => {
      const result = parseCommand('echo   hello    world');
      expect(result).toEqual({
        command: 'echo',
        args: ['hello', 'world'],
      });
    });

    it('should handle tab characters', () => {
      const result = parseCommand('cat\tresume.txt');
      expect(result).toEqual({
        command: 'cat',
        args: ['resume.txt'],
      });
    });

    it('should handle mixed whitespace (spaces and tabs)', () => {
      const result = parseCommand('  cat  \t  resume.txt  \t  ');
      expect(result).toEqual({
        command: 'cat',
        args: ['resume.txt'],
      });
    });
  });

  describe('Case handling', () => {
    it('should convert command to lowercase', () => {
      const result = parseCommand('HELP');
      expect(result).toEqual({
        command: 'help',
        args: [],
      });
    });

    it('should convert mixed-case command to lowercase', () => {
      const result = parseCommand('HeLp');
      expect(result).toEqual({
        command: 'help',
        args: [],
      });
    });

    it('should preserve case in arguments', () => {
      const result = parseCommand('cat RESUME.TXT');
      expect(result).toEqual({
        command: 'cat',
        args: ['RESUME.TXT'],
      });
    });
  });

  describe('Real-world terminal commands', () => {
    it('should parse "help" command', () => {
      const result = parseCommand('help');
      expect(result.command).toBe('help');
      expect(result.args).toHaveLength(0);
    });

    it('should parse "about" command', () => {
      const result = parseCommand('about');
      expect(result.command).toBe('about');
      expect(result.args).toHaveLength(0);
    });

    it('should parse "skills" command', () => {
      const result = parseCommand('skills');
      expect(result.command).toBe('skills');
      expect(result.args).toHaveLength(0);
    });

    it('should parse "cat resume.txt" command', () => {
      const result = parseCommand('cat resume.txt');
      expect(result.command).toBe('cat');
      expect(result.args).toEqual(['resume.txt']);
    });

    it('should parse "ls -la" command', () => {
      const result = parseCommand('ls -la');
      expect(result.command).toBe('ls');
      expect(result.args).toEqual(['-la']);
    });

    it('should parse "cd .." command', () => {
      const result = parseCommand('cd ..');
      expect(result.command).toBe('cd');
      expect(result.args).toEqual(['..']);
    });
  });
});
