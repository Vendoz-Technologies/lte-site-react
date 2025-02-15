export function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Convert camelCase to kebab-case
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^a-zA-Z0-9-]/g, "") // Remove special characters
    .toLowerCase();
}
