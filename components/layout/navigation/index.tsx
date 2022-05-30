import Link from "next/link";
import React from "react";
import {
  House,
  TShirt,
  CoatHanger,
  DesktopTower,
  Diamond,
} from "phosphor-react";

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <House className="nav__icon" weight="bold" />
          <Link href="/">
            <a className="nav__link">Home</a>
          </Link>
        </li>
        <li className="nav__item">
          <TShirt className="nav__icon" weight="bold" />
          <Link href="/products/category/men's%20clothing">
            <a className="nav__link">Men&#39;s Clothing</a>
          </Link>
        </li>
        <li className="nav__item">
          <CoatHanger className="nav__icon" weight="bold" />
          <Link href="/products/category/women's%20clothing">
            <a className="nav__link">Women&#39;s Clothing</a>
          </Link>
        </li>
        <li className="nav__item">
          <Diamond className="nav__icon" weight="bold" />
          <Link href="/products/category/jewelery">
            <a className="nav__link">Jewelry</a>
          </Link>
        </li>
        <li className="nav__item">
          <DesktopTower className="nav__icon" weight="bold" />
          <Link className="nav__link" href="/products/category/electronics">
            <a className="nav__link">Electronics</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
