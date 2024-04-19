import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto">
      {cart.length > 0 ? (
        <div className="mt-8">
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <div className="text-xl font-bold">Your Cart</div>
              <div className="text-lg">
                Summary
                <p className="mt-2">
                  <span className="font-bold">Total Items: </span>
                  <span className="font-bold">${cart.length}</span>
                  <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    CheckOut Now
                  </button>
                </p>
              </div>
            </div>
            <div className="text-lg">
              <p>Total Amount: ${totalAmount}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Cart Empty</h1>
          <NavLink to={"/"}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
