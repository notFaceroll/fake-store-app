import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import { ParsedUrlQuery } from "querystring";
import { Product } from "../../../../store/product-context";
import { Card } from "../../../../components/card";
import { ProductsList } from "../../../../components/products-list";

interface CategoryProps {
  categories: Product[];
  categoryName: string;
}

const Category: NextPage<CategoryProps> = (props) => {
  if (!props.categories) {
    return <p>Loading Categories.</p>;
  }

  return (
    <main className="category">
      <div className="category__title">
        <h2 className="category__heading">{props.categoryName}</h2>
      </div>
      <ProductsList>
        {props.categories.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </ProductsList>
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

export default Category;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { categoryName } = context.params as IParams;
  const ctgProducts = await axios.get<Product[]>(
    `https://fakestoreapi.com/products/category/${categoryName}`
  );
  return {
    props: { categories: ctgProducts.data, categoryName },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await axios.get<string[]>(
    "https://fakestoreapi.com/products/categories"
  );
  const paths = categories.data.map((ctg) => ({
    params: { categoryName: ctg },
  }));
  return {
    paths,
    fallback: false,
  };
};
