import Link from "next/link";
import React from "react";
import {
  House,
  TShirt,
  CoatHanger,
  DesktopTower,
  Diamond,
} from "phosphor-react";
import { useRouter } from "next/router";

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <House className="nav__icon" weight="bold" />
          <Link className="nav__link" href="/">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <TShirt className="nav__icon" weight="bold" />
          <Link
            className="nav__link"
            href="/products/category/men's%20clothing"
          >
            Men&#39;s Clothing
          </Link>
        </li>
        <li className="nav__item">
          <CoatHanger className="nav__icon" weight="bold" />
          <Link
            className="nav__link"
            href="/products/category/women's%20clothing"
          >
            Women&#39;s Clothing
          </Link>
        </li>
        <li className="nav__item">
          <Diamond className="nav__icon" weight="bold" />
          <Link className="nav__link" href="/products/category/jewelery">
            Jewelry
          </Link>
        </li>
        <li className="nav__item">
          <DesktopTower className="nav__icon" weight="bold" />
          <Link className="nav__link" href="/products/category/electronics">
            Electronics
          </Link>
        </li>
      </ul>
    </nav>
  );
};
