import { DatabaseConnectionError } from "../../errors";
import { Product } from "../../models";

export const getProducts = async (id?: string) => {
  try {
    if (id) {
      const productDoc = await Product.findById(id);
      return productDoc;
    }
    const productDoc = await Product.find();
    return productDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
