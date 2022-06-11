import { DatabaseConnectionError } from "../../errors";
import { UserAttrs } from "../../interfaces";
import { User } from "../../models";
export const createUser = async (user: UserAttrs) => {
  try {
    const existingUser = await User.findOne({
      mobile: user.mobile,
    }).lean();

    if (existingUser) return "User already exists";

    const userDoc = await new User(user).save();

    return userDoc;
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
