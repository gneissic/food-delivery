import React, { useState } from "react";
import MyOdersForm from "./MyOdersForm";
import MyOderItems from "./MyOderItems";
import Checkout from "./Checkout";
import { useSelector } from "react-redux";
import OrderHeader from "./OrderHeader";

const MyOrders = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const showForm = useSelector((state) => state.input.showForm);
  const overFlowClasses =
    cartItems.length > 0 && !showForm ? "h-[15rem] overflow-y-scroll" : null;
  const onCloseOrder = () => {
    setSubmitted(false);
  };
  const onSubmitUserData = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify({ userInput: userData, orderedMeals: cartItems }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
    setIsSubmitting(false);
    setSubmitted(true);
  };
  return (
    <div className=" bg-gray-200 w-full hidden md:block ">
      <OrderHeader />

      {isSubmitting && (
        <p className="border border-b-blue-900 border-t-green-900 h-6 w-6 rounded-full animate-spin text-center ml-[10rem]"></p>
      )}
      {submitted && (
        <div className="flex gap-2 items-center">
          <p className="font-semibold text-center text-green-900">
            Orders succesfully submitted!
          </p>
          <button
            onClick={onCloseOrder}
            className="bg-red-800 py-1 px-4 mt-2 font-nun text-white font-semibold rounded-md hover:bg-green-800 transition-all ease duration-300"
          >
            Close
          </button>
        </div>
      )}

      {showForm && <MyOdersForm addUserOrder={onSubmitUserData} />}
      <div className={overFlowClasses}>
        {cartItems.map((item) => (
          <MyOderItems
            key={item.id}
            id={item.id}
            image={item.image}
            price={item.price}
            title={item.title}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}
      </div>

      <Checkout />
    </div>
  );
};

export default MyOrders;
