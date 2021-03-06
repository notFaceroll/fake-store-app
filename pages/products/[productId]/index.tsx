import React, { useState } from "react";

import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { ParsedUrlQuery } from "querystring";
import axios from "axios";

import { Product } from "../../../store/product-context";

import { Star, Minus, Plus } from "phosphor-react";
import Image from "next/image";
import { AddToCartButton } from "../../../components/buttons/AddToCartButton";

interface ProductProps {
  product: Product;
}

const Product: NextPage<ProductProps> = ({ product }) => {
  const [count, setCount] = useState(1);

  const reduceItemByOne = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <main className="product">
      <div className="product__image">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="product__text">
        <div className="product__title">
          <h3 className="product__heading">{product.title}</h3>
          <div className="product__rating">
            <p>
              {product.rating.count} Reviews | {product.rating.rate}&nbsp;
            </p>
            <Star weight="bold" size={20} />
          </div>
        </div>
        <div className="product__desc">
          <p>{product.description}</p>
        </div>
        <div className="product__price">
          <p>${product.price.toFixed(2)}</p>
        </div>
        <div className="product__actions">
          <div className="product__actions-box">
            <button
              aria-label="Decrease by one"
              onClick={reduceItemByOne}
              className="product__btn product__btn-minus"
            >
              <Minus size={16} weight="bold" />
            </button>
            <span className="product__btn product__btn-count">{count}</span>
            <button
              aria-label="Increase by one"
              onClick={() => {
                setCount(count + 1);
              }}
              className="product__btn product__btn-plus"
            >
              <Plus size={16} weight="bold" />
            </button>
          </div>
          <AddToCartButton item={product} quantity={count} variation="large" />
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1653940688">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default Product;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { productId } = context.params as IParams;
//   const product = await axios.get<unknown>(
//     `https://fakestoreapi.com/products/${productId}`
//   );
//   return {
//     props: { product: product.data },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const products = await axios.get<Product[]>(
//     "https://fakestoreapi.com/products"
//   );
//   const paths = products.data.map((item) => ({
//     params: { productId: item.id.toString() },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productId } = context.params as IParams;
  const product = await axios.get<unknown>(
    `https://fakestoreapi.com/products/${productId}`
  );
  return {
    props: { product: product.data },
  };
};
