/**
 * Helper utility functions for common checks and operations
 */

/**
 * Check if an array exists and has items
 * @param array - Array to check
 * @returns true if array exists and has length > 0
 */
export const hasItems = <T>(array: T[] | undefined | null): array is T[] => {
  return Array.isArray(array) && array.length > 0;
};

/**
 * Check if a value exists (is truthy)
 * @param value - Value to check
 * @returns true if value is truthy
 */
export const hasValue = <T>(value: T | undefined | null): value is T => {
  return value !== undefined && value !== null && value !== "";
};

/**
 * Check if at least one of the provided values exists
 * @param values - Values to check
 * @returns true if at least one value is truthy
 */
export const hasAny = (...values: unknown[]): boolean => {
  return values.some((value) => hasValue(value));
};




