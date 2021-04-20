export const hasDuplicateElement = <T>(array: T[]) => {
  return new Set(array).size !== array.length;
};
