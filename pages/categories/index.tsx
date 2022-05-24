import { NextPage } from "next";
import React, { useContext } from "react";
import ProductContext from "../../store/product-context";

const Categories: NextPage = () => {
  const productCtx = useContext(ProductContext);

  return (
    <>
      <h1>All Categories</h1>
      <ul>
        {productCtx?.categories.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
