import React, { useContext } from "react";
import Image from "next/image";
import { Product } from "../../store/product-context";
import { Star } from "phosphor-react";
import Link from "next/link";
import { CartProvider } from "../../store/CartProvider";
import CartContext from "../../store/cart-context";

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
      <li className="card-wrapper">
        <div className="card__image">
          {/* <Image src={item.image} alt="" layout="fill" /> */}
          <img src={item.image} alt={item.title} />
        </div>

        <div className="card__text">
          <Link href={`/products/${item.id}`}>{item.title}</Link>
          <div className="card__pricing">
            <p>
              {item.rating.rate}
              <Star />
            </p>
          </div>
        </div>
        <button onClick={addItem}>Add to Cart</button>
      </li>
    </CartProvider>
  );
};
