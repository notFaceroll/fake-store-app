import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Product } from "../../store/product-context";

interface ButtonProps {
  item: Product;
  quantity: number;
}

export const AddToCartButton = ({ item, quantity }: ButtonProps) => {
  const { addItems } = useContext(CartContext);

  return (
    <button
      aria-label="Add to cart"
      className="btn-primary"
      onClick={() => {
        addItems(item, quantity);
      }}
    >
      Add to Cart
    </button>
  );
};
