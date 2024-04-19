import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/slices/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="border-b pb-4 mb-4">
      <div className="flex items-center space-x-4">
        <div className="w-24">
          <img src={item.image} alt="" className="w-full h-auto" />
        </div>
        <div>
          <h1 className="text-lg font-bold">{item.title}</h1>
          <p className="text-gray-600">{item.description}</p>
          <div className="flex items-center mt-2">
            <p className="font-bold">${item.price}</p>
            <button
              className="ml-4 cursor-pointer"
              onClick={() => removeFromCart(item.id)}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
