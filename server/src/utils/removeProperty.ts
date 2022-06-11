export const removeProperty = (obj: object, property: string) => {
  const prop = property as keyof object;
  const newObj = { ...obj };
  delete newObj[prop];
  return newObj;
};
