import React, { useContext, useState } from "react";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import axios from "axios";

import { Product } from "../../../store/product-context";

import { Star, Minus, Plus } from "phosphor-react";
import CartContext from "../../../store/cart-context";

interface ProductProps {
  product: Product;
}

const Product: NextPage<ProductProps> = ({ product }) => {
  const cartCtx = useContext(CartContext);
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
        <img src={product.image} alt="" />
      </div>
      <div className="product__text">
        <div className="product__title">
          <h3 className="product__heading">{product.title}</h3>
        </div>
        <div className="product__description">
          <p>{product.description}</p>
        </div>
        <div className="product__reviews">
          <p>{product.rating.count} Reviews</p>
        </div>
        <div className="product__rating">
          <p>{product.rating.rate}</p>
          <Star />
        </div>
        <div className="product__price">
          <p>${product.price}</p>
        </div>
        <div className="product__btn-box">
          <button
            onClick={reduceItemByOne}
            className="product__btn product__btn-minus"
          >
            <Minus />
          </button>
          <span className="product__btn product__btn-count">{count}</span>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="product__btn product__btn-plus"
          >
            <Plus />
          </button>
          <button
            onClick={() => {
              cartCtx.addItems(product, count);
            }}
            className="product__btn product__btn-submit"
          >
            Add to Cart!
          </button>
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

export const getStaticProps: GetStaticProps = async (context) => {
  const { productId } = context.params as IParams;
  const product = await axios.get<unknown>(
    `https://fakestoreapi.com/products/${productId}`
  );
  console.log(product.data);
  return {
    props: { product: product.data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await axios.get<Product[]>(
    "https://fakestoreapi.com/products"
  );
  const paths = products.data.map((item) => ({
    params: { productId: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
