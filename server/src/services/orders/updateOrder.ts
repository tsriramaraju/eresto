import { DatabaseConnectionError } from "../../errors";
import { OrderAttrs } from "../../interfaces";
import { Order } from "../../models";

export const updateOrder = async (id: string, data: OrderAttrs) => {
  try {
    const order = await Order.findByIdAndUpdate(id, data);
    return order;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
