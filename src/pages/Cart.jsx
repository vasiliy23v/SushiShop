import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
<div className="cart cart--empty">
          <h2>
            Корзина пустая{" "}
            <span role="img" aria-label="sad smile">
              😕
            </span>
          </h2>
          <p>
            В вашей корзине пока ещё нет товаров.
            <br />
            Для того, чтобы преобрести покупку, перейди на главную страницу.
          </p>
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
  );
}

export default Cart;
