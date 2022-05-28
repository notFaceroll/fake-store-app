import React, { useContext, useState } from "react";
import { ShoppingCartSimple } from "phosphor-react";
import CartContext from "../../../store/cart-context";

export const Header = () => {
  const cartCtx = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <header className="header">
      <h1 className="header__brand">
        Not <span className="header__brand-name">Faceroll&#39;s</span> Awesome
        Store
      </h1>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Open
      </button>
      <div className="header__cart">
        <ShoppingCartSimple size={26} />
        <span className="header__cart-items">{cartCtx.items.length}</span>
      </div>
      {isOpen && (
        <aside className="header__bag">
          <p> </p>
        </aside>
      )}
    </header>
  );
};
