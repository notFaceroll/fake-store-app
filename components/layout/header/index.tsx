import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <span>ShopLogo</span>
      <ul className="header__list">
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
