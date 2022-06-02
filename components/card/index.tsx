import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import CartContext from "../../store/cart-context";
import { CartProvider } from "../../store/CartProvider";
import { Product } from "../../store/product-context";

import { Star } from "phosphor-react";

interface CardProps {
  item: Product;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  const cartCtx = useContext(CartContext);
  const addItem = () => {
    cartCtx.addItems(item, 1);
  };
  return (
    <CartProvider>
      <li className="card">
        <div className="card__image">
          <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="card__text">
          <Link href={`/products/${item.id}`}>
            <a className="card__link">{item.title}</a>
          </Link>
          <div className="card__pricing">
            <p>{item.rating.rate}</p>
            <Star />
          </div>
        </div>
        <button
          aria-label="Add to cart"
          className="card__btn"
          onClick={addItem}
        >
          Add to Cart
        </button>
      </li>
    </CartProvider>
  );
};
