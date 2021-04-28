export const hasDuplicatedValue = (values) => {
  const set = new Set(values);

  return set.size !== values.length;
};
