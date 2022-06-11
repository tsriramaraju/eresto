import { DatabaseConnectionError } from "../../errors";
import { User } from "../../models";

export const getCart = async (userId: string) => {
  try {
    const userDoc = await User.findById(userId).select("cart").lean();
    return userDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
