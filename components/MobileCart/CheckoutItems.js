import { cartActions } from "@/store/cart-slice";
import { inputActions } from "@/store/input-slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckoutItems = (props) => {
  const quantity = useSelector((state) => state.cart.totalAmount);
  const items = useSelector((state) => state.cart.items);
  const checkBtn = items.length > 0;
  const dispatch = useDispatch();
  const showFormHandler = () => {
    dispatch(inputActions.showFormHandler());
  };

  return (
    <div className="md:hidden grid items-center z-50 text-white">
      <div className="flex justify-between  w-full ">
        <div className="flex font-bold fixed z-50 bottom-3 left-[15%] text-[3rem] ">
          <p>Total:</p>
          <p className="ml-2">${quantity}</p>
        </div>
        <div>
          <button
            disabled={!checkBtn}
            onClick={showFormHandler}
            className="disabled:bg-gray-700 cursor-not-allowed font-semibold bg-amber-800 z-50 fixed -bottom-[1.3rem] right-0 h-[9rem] text-[3rem] px-[7rem]  rounded-tl-[150rem] rounded-br-full "
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
