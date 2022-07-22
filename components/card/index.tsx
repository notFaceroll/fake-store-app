import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Product } from "../../store/product-context";

import { Star } from "phosphor-react";
import { AddToCartButton } from "../buttons/AddToCartButton";

interface CardProps {
  item: Product;
}

export const Card = ({ item }: CardProps) => {
  return (
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
      <div className="card__box">
        <AddToCartButton item={item} quantity={1} />
      </div>
      {/* <button aria-label="Add to cart" className="card__btn" onClick={addItem}>
        Add to Cart
      </button> */}
    </li>
  );
};
