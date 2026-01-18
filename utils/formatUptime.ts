/**
 * Formats seconds into a human-readable uptime string
 * @param seconds - The number of seconds
 * @returns Formatted string like "1h 30m 45s"
 */
export function formatUptime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours}h ${minutes}m ${secs}s`;
}
