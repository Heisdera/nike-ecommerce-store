import React from "react";
import { useDispatch } from "react-redux";

import QuantityControlPanel from "@/components/QuantityControlPanel";
import Price from "../currencyConverter/Price";
import { setRemoveItemFromCart } from "./cartSlice";

interface CartItemProps {
  cartItem: {
    name: string;
    image: string;
    id: string;
    price_string: string;
    currency: string;
    price: number;
    cartQuantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();

  function handleRemoveItemFromCart() {
    dispatch(setRemoveItemFromCart(cartItem));
  }

  return (
    <li key={cartItem.id} className="flex py-6">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-md border border-gray-200">
        <img
          src={cartItem.image}
          alt={cartItem.name}
          className="block object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col py-0.5">
        <div>
          <div className="flex justify-between">
            <h3 className="text-gray-600 font-medium">{cartItem.name}</h3>
            <p className="ml-4 text-gray-900">
              {/* €{cartItem.price * cartItem.cartQuantity} */}
              <Price
                className="font-semibold"
                price={cartItem.price * cartItem.cartQuantity}
              />
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Price / Qty:
            <span>
              {/* €{cartItem.price} */}
              <Price className="ml-1" price={cartItem.price} />
            </span>
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="w-24">
            <QuantityControlPanel
              product={cartItem}
              color="text-indigo-500 hover:text-indigo-600"
            />
          </div>

          <button
            type="button"
            className="font-medium text-red-500 transition-colors duration-200 hover:text-red-400"
            onClick={() => handleRemoveItemFromCart()}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
