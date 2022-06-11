import { DatabaseConnectionError } from "../../errors";
import { User } from "../../models";

export const getUsers = async (data: { id?: string; mobile?: number }) => {
  try {
    const { id, mobile } = data;
    if (mobile) {
      const user = await User.findOne({ mobile });
      if (!user) {
        throw new DatabaseConnectionError("User not found");
      }
      return user;
    }
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
