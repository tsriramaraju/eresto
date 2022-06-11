import { DatabaseConnectionError } from "../../errors";
import { CartItem } from "../../interfaces";
import { User } from "../../models";

export const removeCartItem = async (userId: string, cart: CartItem) => {
  try {
    const userDoc = await User.findById(userId);
    if (!userDoc) return "User not found";
    const index = userDoc.cart.items.findIndex((item) => item.name.toString() === cart.name.toString());
    if (index === -1) return "Item not found";
    userDoc.cart.items.splice(index, 1);
    userDoc.cart.finalPrice -= cart.price * cart.quantity;
    return await userDoc.save();
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
