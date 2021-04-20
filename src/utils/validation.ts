export const hasDuplicateElement = <T>(array: T[]): boolean => {
  return new Set(array).size !== array.length;
};
