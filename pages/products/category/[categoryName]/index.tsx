import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { ParsedUrlQuery } from "querystring";
import { Product } from "../../../../store/product-context";

interface CategoryProps {
  categories: Product[];
}

const Category: NextPage<CategoryProps> = (props) => {
  console.log(props.categories);
  if (!props.categories) {
    return <p>Loading Categories.</p>;
  }

  return (
    <>
      <h1>Category Page</h1>
      <ul>
        {props.categories.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </>
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
  console.log(ctgProducts.data);
  return {
    props: { categories: ctgProducts.data },
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
