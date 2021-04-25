const deepFreeze = (object) => {
  const propNames = Object.getOwnPropertyNames(object);

  for (const key of propNames) {
    const value = object[key];

    object[key] = value && typeof value === 'object' ? deepFreeze(value) : value;
  }

  return Object.freeze(object);
};

export default deepFreeze;
