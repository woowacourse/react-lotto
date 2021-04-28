const deepFreeze = (object) => {
  const ownProperties = Object.getOwnPropertyNames(object);

  for (const key of ownProperties) {
    const value = object[key];

    if (value !== null && typeof value === 'object') {
      object[key] = deepFreeze(value);
    }
  }

  return Object.freeze(object);
};

export default deepFreeze;
