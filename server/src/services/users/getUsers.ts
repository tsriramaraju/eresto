import { DatabaseConnectionError } from "../../errors";
import { User } from "../../models";

export const getUsers = async (id?: string) => {
  try {
    if (id) {
      const userDoc = await User.findById(id).populate("order").lean();
      return userDoc;
    }
    const userDoc = await User.find().populate("order").lean();
    return userDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
