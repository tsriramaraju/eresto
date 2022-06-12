import { SpiceLevel } from "./user";

export enum OrderStatus {
  pending = "Pending",
  processing = "Processing",
  delivered = "Delivered",
  cancelled = "Cancelled",
  newOrder = "New",
  accepted = "Accepted",
}

export enum ItemStatus {
  pending = "Pending",
  cooking = "Cooking",
  ready = "Ready",
  delivered = "Delivered",
}

export enum PaymentStatus {
  pending = "Pending",
  paid = "Paid",
  cancelled = "Cancelled",
}

export interface OrderItem {
  name: string;
  image: string;
  price: number;
  addons: string[];
  quantity: number;
  spiceLevel?: SpiceLevel;
  status: ItemStatus;
}

export interface OrderAttrs {
  items: OrderItem[];
  finalPrice: number;
  status: OrderStatus;
  note?: string;
  customerId: string;
  tableId: string;
  deliveredAt?: Date;
  paymentStatus?: PaymentStatus;
}

export interface OrderDoc {
  _id: string;
  items: OrderItem[];
  finalPrice: number;
  status: OrderStatus;
  note: string;
  customerId: string;
  tableId: string;
  deliveredAt: Date;
  paymentStatus: PaymentStatus;
}
