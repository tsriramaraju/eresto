import { Document, Model } from "mongoose";
import { SpiceLevel } from "./user";

enum OrderStatus {
  pending = "Pending",
  processing = "Processing",
  delivered = "Delivered",
  cancelled = "Cancelled",
  newOrder = "New",
  accepted = "Accepted",
}

enum ItemStatus {
  pending = "Pending",
  cooking = "Cooking",
  ready = "Ready",
  delivered = "Delivered",
}

enum PaymentStatus {
  pending = "Pending",
  paid = "Paid",
  cancelled = "Cancelled",
}

interface OrderItem {
  name: string;
  image: string;
  price: number;
  addons: string[];
  quantity: number;
  spiceLevel?: SpiceLevel;
  status: ItemStatus;
}

interface OrderAttrs {
  items: OrderItem[];
  finalPrice: number;
  status: OrderStatus;
  note?: string;
  customerId: string;
  tableId: string;
  deliveredAt?: Date;
  paymentStatus?: PaymentStatus;
}

interface OrderModel extends Model<OrderDoc> {
  build(attrs: OrderAttrs): OrderDoc;
}

/**
 * An interface that describes the properties that a Order document has
 */
interface OrderDoc extends Document {
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

export { OrderDoc, OrderAttrs, OrderModel, OrderStatus, ItemStatus, OrderItem };
