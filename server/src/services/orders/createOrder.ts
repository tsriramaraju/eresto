import { DatabaseConnectionError } from "../../errors";
import { OrderAttrs } from "../../interfaces";
import { Order } from "../../models";

export const createOrder = async (data: OrderAttrs) => {
  try {
    const order = await Order.create(data);
    return order;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
