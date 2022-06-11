import { DatabaseConnectionError } from "../../errors";
import { Product } from "../../models";

export const getProducts = async (id?: string) => {
  try {
    if (id) {
      const productDoc = await Product.findById(id).lean();
      return productDoc;
    }
    const productDoc = await Product.find().lean();
    return productDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
