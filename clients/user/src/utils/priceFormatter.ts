export const priceFormatter = (x: number, slash = true, valueOnly = false) => {
  const value = Math.floor(x)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (valueOnly) {
    return value;
  }
  return `₹ ${value} ${slash ? '/-' : ''}`;
};
