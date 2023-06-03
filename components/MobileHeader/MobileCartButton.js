import React from "react";
import { useSelector } from "react-redux";

const MobileCartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div onClick={props.openModal} className="flex justify-end mr-[13rem]">
      <button className="rounded-full border-2 border-green-900 bg-green-900 text-gray-200 text-[2.5rem] font-bold grid items-center w-[19rem] py-8 mt-4">
        Your Cart ({totalQuantity})
      </button>
    </div>
  );
};

export default MobileCartButton;
