import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  function handleClick() {
    setIsInCart((isInCart) => !isInCart);
  }
  const itemClass = isInCart ? "in-cart" : "";
  const btnText = isInCart ? "Remove from Cart" : "Add to Cart";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">
        {btnText}
      </button>
    </li>
  );
}

export default Item;
