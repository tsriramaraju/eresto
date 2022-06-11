export const removeProperty = (obj: object, property: string, extras?: string[]) => {
  const prop = property as keyof object;
  const newObj = { ...obj };
  delete newObj[prop];

  if (extras) {
    extras.forEach((extra) => {
      // @ts-ignore
      delete newObj[extra];
    });
  }

  return newObj;
};
