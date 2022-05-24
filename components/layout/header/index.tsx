import Link from "next/link";
import React, { useContext } from "react";
import ProductContext from "../../../store/product-context";
import classes from "./header.module.scss";

export const Header = () => {
  // const categoryTypes = useContext(ProductContext);

  return (
    <header className={classes.header}>
      <span>ShopLogo</span>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Man&#39;s Clothing</Link>
        </li>
        <li>
          <Link href="/">Woman&#39;s Clothing</Link>
        </li>
        <li>
          <Link href="/products/category/jewelery">Jewelry</Link>
        </li>
        <li>
          <Link href="/products/category/electronics">Electronics</Link>
        </li>
      </ul>
    </header>
  );
};
