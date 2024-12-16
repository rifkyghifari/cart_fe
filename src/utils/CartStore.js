import React from "react";
import CartItem from "./CartItem";

const CartStore = ({ storeName, items, onIncrement, onDecrement}) => {
  return (
    <div className="flex justify-center">
      <div className="w-[700px] mb-4">
        <h1 className="text-2xl font-semibold mb-4">{storeName}</h1>
        {items.map((item, idx)=>(
            <CartItem
            key={idx}
            item={item}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            />
        ))}
      </div>
    </div>
  );
};

export default CartStore;
