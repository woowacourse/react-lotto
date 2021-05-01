export const hasDuplicatedValue = (values) => {
  const set = new Set(values);

  return set.size !== values.length;
};

export const isNumber = (string) => {
  return !/[^0-9]/g.test(string);
};
