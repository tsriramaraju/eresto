export interface User {
  _id: string;
  name: string;
  cart: Cart;
  mobile: number;
  orders: string[];
}

export interface Cart {
  _id: string;
  items: CartItem[];
  finalPrice: number;
}

export enum SpiceLevel {
  medium,
  hot,
  low,
}

export interface CartItem {
  name: string;
  image: string;
  price: number;
  addons: string[];
  quantity: number;
  spiceLevel?: SpiceLevel;
}

export interface OtpAttrs {
  mobile: number;

  name: string;

  recaptchaToken: string;
}
