import { createContext } from "react";
import { Product } from "./product-context";

export interface CartItem extends Product {
  quantity: number;
}

export type UserCart = {
  items: CartItem[];
  total: number;
  addItems: (product: Product, quantity: number) => void;
  removeItems: (product: Product) => void;
  clearCart: () => void;
};

const CartContext = createContext<UserCart>({} as UserCart);

export default CartContext;
