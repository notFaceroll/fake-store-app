import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import Link from "next/link";

import { Cart } from "../../cart";
import { ShoppingCartSimple, List, X } from "phosphor-react";

export const Header = () => {
  const { items } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [btnIsHighLighted, setBtnIsHighlighted] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <header className="header">
      <List
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
        className="header__menu"
        size={26}
      />
      <h1 className="header__brand">
        Not <span className="header__brand-name">Faceroll&#39;s</span> Awesome
        Store
      </h1>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`header__cart ${btnIsHighLighted ? 'bump' : null}`}
      >
        <ShoppingCartSimple size={26} />
        <span className="header__cart-items">{items.length}</span>
      </button>

      {isOpen && (
        <>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="backdrop"
          ></div>
          <Cart />
        </>
      )}
      {isNavOpen && (
        <>
          <aside className="header__sidebar">
            <X
              onClick={() => {
                setIsNavOpen(!isNavOpen);
              }}
              className="header__X"
              size={26}
            />
            <nav className="header__nav">
              <ul className="header__list">
                <li className="header__item">
                  <Link href="/">
                    <a
                      onClick={() => {
                        setIsNavOpen(!isNavOpen);
                      }}
                      className="header__link"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="header__item">
                  <Link href="/products/category/men's%20clothing">
                    <a
                      onClick={() => {
                        setIsNavOpen(!isNavOpen);
                      }}
                      className="header__link"
                    >
                      Men&#39;s Clothing
                    </a>
                  </Link>
                </li>
                <li className="header__item">
                  <Link href="/products/category/women's%20clothing">
                    <a
                      onClick={() => {
                        setIsNavOpen(!isNavOpen);
                      }}
                      className="header__link"
                    >
                      Women&#39;s Clothing
                    </a>
                  </Link>
                </li>
                <li className="header__item">
                  <Link href="/products/category/jewelery">
                    <a
                      onClick={() => {
                        setIsNavOpen(!isNavOpen);
                      }}
                      className="header__link"
                    >
                      Jewelry
                    </a>
                  </Link>
                </li>
                <li className="header__item">
                  <Link
                    className="header__link"
                    href="/products/category/electronics"
                  >
                    <a
                      onClick={() => {
                        setIsNavOpen(!isNavOpen);
                      }}
                      className="header__link"
                    >
                      Electronics
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
};
