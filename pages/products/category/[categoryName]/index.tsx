import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import { ParsedUrlQuery } from "querystring";
import { Product } from "../../../../store/product-context";
import { Card } from "../../../../components/card";
import { ProductsList } from "../../../../components/products-list";
import { Title } from "../../../../components/title";

interface CategoryProps {
  categories: Product[];
  categoryName: string;
}

const Category: NextPage<CategoryProps> = (props) => {
  const [loadedProducts, setLoadedProducts] = useState<Product[]>(
    props.categories
  );
  console.log(loadedProducts);
  if (!props.categories) {
    return <p>Loading Categories.</p>;
  }

  return (
    <>
      <Title>{props.categoryName}</Title>
      <ProductsList>
        {props.categories.map((item, index) => {
          return <Card key={index}>{item.title}</Card>;
        })}
      </ProductsList>
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
