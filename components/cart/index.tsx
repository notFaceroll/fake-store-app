import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import { Trash, ShoppingBagOpen } from "phosphor-react";

interface CartProps {
  toggleCart: () => void;
}

export const Cart = ({ toggleCart }: CartProps) => {
  const cartCtx = useContext(CartContext);

  return (
    <aside className="cart">
      <div className="cart__header">
        <p>Your Items</p>
        <button className="cart__close" onClick={toggleCart}>
          Close
        </button>
      </div>
      {cartCtx.items.length > 0 ? (
        <>
          <ul className="cart__list">
            {cartCtx.items.map((item, index) => {
              return (
                <li className="cart__item" key={index}>
                  <p className="cart__item-title">{item.title}</p>
                  <div className="cart__item-price">
                    <p>
                      {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                    <button
                      className="cart__item-btn"
                      onClick={() => {
                        cartCtx.removeItems(item);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="cart__actions">
            <div className="cart__total">
              <p>Total Price: ${cartCtx.total.toFixed(2)}</p>
            </div>
            <div className="cart__btn-box">
              <button
                onClick={() => {
                  cartCtx.clearCart();
                }}
                className="cart__btn cart__btn-clear"
              >
                <Trash size={24} />
              </button>
              <button className="cart__btn cart__btn-check">Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <div className="cart__empty">
          <ShoppingBagOpen size={48} />
          <p>
            Your cart looks empty right now :(
            <br /> Go shopping!
          </p>
        </div>
      )}
    </aside>
  );
};
