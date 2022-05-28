import React, { useEffect, useState } from "react";
import CartContext, { UserCart, CartItem } from "./cart-context";
import { Product } from "./product-context";

const defaultItemState = {
  id: 254,
  title: "notDefault",
  price: 0,
  quantity: 0,
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [item, setItem] = useState<CartItem>(defaultItemState);
  const [total, setTotal] = useState(0);

  const addItems = (product: Product, quantity: number) => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    };
    setCartItems([...cartItems, cartItem]);
  };

  const cartCtx = {
    items: cartItems,
    addItems,
  };

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
};
