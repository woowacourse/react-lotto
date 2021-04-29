const propTypesRange = (min, max, isRequired) => {
  return (props, propName, componentName) => {
    const propValue = props[propName];
    const propType = typeof props[propName];

    if (propValue === undefined) {
      if (isRequired) {
        return new Error(`Prop ${propName} is required. But never passed.`);
      }

      return null;
    }

    if (propType !== "number") {
      return new Error(
        `Invalid type of prop ${propName} passed to ${componentName}. Expected number type.`
      );
    }

    if (propValue < min || propValue > max) {
      return new Error(
        `Invalid prop ${propName}. Expected number between ${min} and ${max}.`
      );
    }

    return null;
  };
};

export default propTypesRange;
