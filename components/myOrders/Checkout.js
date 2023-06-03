import { cartActions } from "@/store/cart-slice";
import { inputActions } from "@/store/input-slice";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const Checkout = (props) => {
  const items = useSelector((state) => state.cart.items);

  const showOrderBtn = items.length > 0;
  const showForm = useSelector((state) => state.input.showForm);
  const deliveryFee = useSelector((state) => state.cart.deliveryFee);
  const subtotal = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();
  const hideFormHandler = () => {
    dispatch(inputActions.onHideForm());
  };
  const showFormHandler = () => {
    dispatch(inputActions.showFormHandler());
  };
  const clearCartHandler = () => {
    dispatch(cartActions.onClearCart());
  };

  return (
    <Fragment>
      <div className="hidden md:block mt-[2rem] pt-[1rem] border border-t-gray-600">
        <div className="flex justify-between">
          <div className=" ml-5">
            <p>Sub Total</p>
            <p>Delivery Fee</p>
          </div>
          <div className="mr-4 grid items-center">
            <div>${subtotal}</div>
            <div>${deliveryFee}</div>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <button
            disabled={!showForm}
            onClick={hideFormHandler}
            className="bg-red-800 py-2 px-4 mt-2 font-nun text-white font-semibold rounded-md hover:bg-green-800 transition-all ease duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            Cancel
          </button>

          {!showForm && (
            <button
              disabled={!showOrderBtn}
              onClick={showFormHandler}
              className="bg-red-800 py-2 px-4 mt-2 font-nun text-white font-semibold rounded-md hover:bg-green-800 transition-all ease duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              order
            </button>
          )}
        </div>
        <div className=" flex gap-5 mt-[3rem] justify-center items-center  border border-red-800 p-3">
          <h2 className="text-md font-semi-bold">Promotion</h2>
          <button className="bg-red-800 text-white h-[3rem] w-[10rem] rounded-sm font-semibold">
            Add Coupon
          </button>
        </div>
        <div className="flex justify-between pt-[1rem] border border-t-gray-600 mt-[2rem]">
          <p className="text-gray-600 pl-2">Total</p>
          <p className="text-black font-bold pr-2">${subtotal}</p>
        </div>
        <div className="flex justify-center pt-6">
          <button
            onClick={clearCartHandler}
            className=" font-semibold bg-red-800 text-white w-[15rem] py-2 hover:animate-bounce "
          >
            Remove all cart
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;
