import React, { useState } from "react";
import CartContext, { CartItem } from "./cart-context";
import { Product } from "./product-context";

interface CartProviderProps {
  children?: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  const addItems = (product: Product, quantity: number) => {
    const updatedTotalAmount = total + quantity * product.price;
    setTotal(updatedTotalAmount);
    // check if the item already exists on the cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    const existingCartItem = cartItems[existingItemIndex];

    let updatedItems;
    // if it exists, update the quantity
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + quantity,
      };
      updatedItems = [...cartItems];
      updatedItems[existingItemIndex] = updatedItem;
    }
    // if it does not, create a new one and add to the cart array
    else {
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        rating: product.rating,
        description: product.description,
        category: product.category,
        quantity: quantity,
      };
      updatedItems = cartItems.concat(cartItem);
    }
    setCartItems(updatedItems);
  };
  const removeItems = (product: Product) => {
    // find the item
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    const existingItem = cartItems[existingItemIndex];

    // deduct price to update it
    const updatedTotalAmount = total - existingItem.price;
    let updatedItems;

    // if it is the last one, remove the item
    if (existingItem.quantity === 1) {
      updatedItems = cartItems.filter((item) => item.id !== product.id);
    }
    // if it isn't, remove just 1
    else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...cartItems];
      updatedItems[existingItemIndex] = updatedItem;
    }
    setTotal(updatedTotalAmount);
    setCartItems(updatedItems);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
  };

  const cartCtx = {
    items: cartItems,
    addItems,
    removeItems,
    total,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
};
