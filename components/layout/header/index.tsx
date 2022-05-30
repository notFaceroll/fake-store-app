import React, { useContext, useState } from "react";
import CartContext from "../../../store/cart-context";

import { Cart } from "../../cart";
import { ShoppingCartSimple } from "phosphor-react";

export const Header = () => {
  const cartCtx = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="header__brand">
        Not <span className="header__brand-name">Faceroll&#39;s</span> Awesome
        Store
      </h1>

      <div className="header__cart">
        <ShoppingCartSimple
          size={26}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <span className="header__cart-items">{cartCtx.items.length}</span>
      </div>

      {isOpen && <Cart />}
    </header>
  );
};
