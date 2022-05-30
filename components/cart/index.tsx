import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

export const Cart = () => {
  const cartCtx = useContext(CartContext);
  return (
    <aside className="cart">
      <ul className="cart__list">
        {cartCtx.items.map((item, index) => {
          return (
            <li className="cart__item" key={index}>
              <p>
                {item.title} &#8594; {item.quantity} x ${item.price}
              </p>
              <button
                onClick={() => {
                  cartCtx.removeItems(item);
                }}
              >
                Remove one
              </button>
            </li>
          );
        })}
      </ul>
      <p>Total Price: ${cartCtx.total.toFixed(2)}</p>
      <button
        onClick={() => {
          cartCtx.clearCart();
        }}
        className="cart__btn"
      >
        Empty Cart
      </button>
      <button className="cart__btn">Checkout</button>
    </aside>
  );
};
