import React from "react";
import { useGallery } from "../../contexts/gallery-context";

const CartList = () => {
  const { cartItems, removeFromCart } = useGallery();

  return (
    <div>
      <div className="py-10 px-5 flex flex-col gap-5 items-start">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <div
              key={item.id}
              className="inline-flex justify-between items-center gap-5"
            >
              <img
                src={item.url}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 bg-red-500 text-white rounded-lg"
              >
                del
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartList;
