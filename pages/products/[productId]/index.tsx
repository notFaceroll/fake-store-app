import React from "react";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import axios from "axios";

import { Product } from "../../../store/product-context";
import Image from "next/image";

import { Star } from "phosphor-react";

interface ProductProps {
  product: Product;
}

const Product: NextPage<ProductProps> = ({ product }) => {
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
