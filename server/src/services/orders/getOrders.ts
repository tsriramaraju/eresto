import { DatabaseConnectionError } from "../../errors";
import { Order } from "../../models";

export const getOrders = async (id?: string) => {
  try {
    if (id) {
      const orderDoc = await Order.findById(id);
      return orderDoc;
    }
    const orderDoc = await Order.find();
    return orderDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
