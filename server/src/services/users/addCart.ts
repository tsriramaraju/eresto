import { DatabaseConnectionError } from "../../errors";
import { CartItem } from "../../interfaces";
import { User } from "../../models";

export const addCartItem = async (userId: string, cart: CartItem) => {
  try {
    const userDoc = await User.findById(userId);
    if (!userDoc) return "User not found";
    userDoc.cart.items.push(cart);
    userDoc.cart.finalPrice += cart.price * cart.quantity;
    return await userDoc.save();
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
