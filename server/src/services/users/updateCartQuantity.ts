import { DatabaseConnectionError } from "../../errors";
import { CartItem } from "../../interfaces";
import { User } from "../../models";

export const updateCartQuantity = async (userId: string, cart: CartItem) => {
  try {
    const userDoc = await User.findById(userId);
    if (!userDoc) return "User not found";
    const index = userDoc.cart.items.findIndex((item) => item.name.toString() === cart.name.toString());
    if (index === -1) return "Item not found";
    userDoc.cart.items[index].quantity = cart.quantity;
    userDoc.cart.finalPrice = userDoc.cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return await userDoc.save();
  } catch (error) {
    throw new DatabaseConnectionError(error.message);
  }
};
