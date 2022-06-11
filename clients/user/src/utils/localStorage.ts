import setAuthToken from './setAuthToken';

type key =
  | 'token'
  | 'cart'
  | 'favourites'
  | 'orders'
  | 'addresses'
  | 'defaultAddress'
  | 'checkout'
  | 'parked orders'
  | 'pin';

export const persistStorage = (key: key, value: any) => {
  if (typeof localStorage === 'undefined') {
    return null;
  }
  localStorage.setItem(key, JSON.stringify(value));
};

export const clearStorage = (key: key) => {
  if (typeof localStorage === 'undefined') {
    return null;
  }
  localStorage.removeItem(key);
};

export const checkStorage = (key: key) => {
  if (typeof localStorage === 'undefined') {
    return null;
  }

  const item = localStorage.getItem(key);
  if (item && key === 'token') {
    setAuthToken(item);
    return item;
  }
  if (item) return JSON.parse(item);
  return null;
};
