import { createContext } from "react";
import { Product } from "./product-context";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export type UserCart = {
  items: CartItem[];
  // total: string;
  addItems: (product: Product, quantity: number) => void;
};

const CartContext = createContext<UserCart>({} as UserCart);

export default CartContext;
