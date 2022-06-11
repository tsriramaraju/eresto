import { Document, Model } from "mongoose";
import { OrderStatus, OrderItem } from "..";

/**
 * Interface that describes the properties that are required to create a new Razor pay Order Document
 */
interface RazorPayOrderAttrs {
  items: OrderItem[];
  finalPrice: number;
  status: OrderStatus;
  note: string;
  customerId: string;
  tableId: string;
  deliveredAt: Date;
  razorPayOrder: {
    id: string;
    entity: string;
    amount: number;
    amount_paid: number;
    amount_due: number;
    currency: "INR" | "USD";
    receipt: string | null;
    offer_id: string | null;
    status: string;
    attempts: number;
    notes: string[] | [];
    created_at: number;
  };
}

/**
 * Interface that describes the methods that a Order Model has
 */
interface RazorPayOrderModel extends Model<RazorPayOrderDoc> {
  build(attrs: RazorPayOrderAttrs): RazorPayOrderDoc;
}

/**
 * Interface that describes the properties that a Order Document has
 */
interface RazorPayOrderDoc extends Document {
  _id: string;
  items: OrderItem[];
  finalPrice: number;
  status: OrderStatus;
  note: string;
  customerId: string;
  tableId: string;
  deliveredAt: Date;
  razorPayOrder: {
    id: string;
    entity: string;
    amount: number;
    amount_paid: number;
    amount_due: number;
    currency: "INR" | "USD";
    receipt: string | null;
    offer_id: string | null;
    status: string;
    attempts: number;
    notes: string[] | [];
    created_at: number;
  };
}

export { RazorPayOrderAttrs, RazorPayOrderDoc, RazorPayOrderModel };
