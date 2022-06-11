import { Cart } from "./index";

/**
 * Payload structure for requests body
 */
interface EmailPayload {
  name: string;
  email: string;
  password: string;
  image?: string;
}
/**
 * Payload structure for requests body
 */
interface AdminPayload {
  name: string;
  email: string;
  password: string;
  mobile: number;
}
interface Meta {
  title: string;
  description: string;
  keywords: string[];
}

/**
 * Payload structure for requests body
 */
interface MobilePayload {
  name: string;
  mobile: number;
  image?: string;
}

/**
 * JWT payload structure
 */
interface JWTUserPayload {
  _id: string;
  name: string;
  cart: Cart;
  mobile: number;
  orders: string[];
}

export { EmailPayload, AdminPayload, MobilePayload, JWTUserPayload, Meta };
