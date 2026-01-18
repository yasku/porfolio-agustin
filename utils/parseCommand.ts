/**
 * Parses a command string into command and arguments
 * @param input - The raw command string to parse
 * @returns An object containing the command and arguments array
 */
export interface ParsedCommand {
  command: string;
  args: string[];
}

export function parseCommand(input: string): ParsedCommand {
  // Trim leading/trailing whitespace
  const trimmed = input.trim();

  // Handle empty input
  if (!trimmed) {
    return { command: '', args: [] };
  }

  // Split by whitespace (handles multiple spaces, tabs, etc.)
  const parts = trimmed.split(/\s+/);

  // First part is the command, rest are arguments
  const [command, ...args] = parts;

  return {
    command: command.toLowerCase(),
    args,
  };
}
