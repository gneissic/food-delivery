import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import CheckoutItems from "./CheckoutItems";
import MobileForm from "./MobileForm";
import { useState } from "react";

const MobileCart = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const showForm = useSelector((state) => state.input.showForm);
  const overflowClass =
    cartItems.length > 4
      ? " h-[85%] overflow-y-scroll fixed  top-[5%] left-[10%] z-50 gap-[2rem] grid"
      : "fixed  top-[5%] left-[10%] z-50 gap-[2rem] grid";
  const itemsLength = cartItems.length > 0;
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
    <div>
      {isSubmitting && (
        <div className="fixed z-50  top-[35%] left-[20%]">
          <p className="fixed top-[25%] left-[40%] border-[5rem] border-b-amber-600 border-t-amber-600 h-[10rem] w-[10rem] rounded-full animate-spin "></p>
          <p className="text-[4rem] font-lora text-amber-500 font-semibold">
            Loading please wait.....
          </p>
        </div>
      )}
      {submitted && (
        <div className="flex gap-2 items-center fixed z-50 left-[5%] top-[30%] font-lora text-[4rem]">
          <p className="font-semibold text-center text-amber-500 ">
            Orders succesfully submitted!
          </p>
        </div>
      )}

      {itemsLength && !showForm && (
        <div className={overflowClass}>
          {cartItems.map((item) => (
            <Modal
              key={item.id}
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
              general={item.general}
            />
          ))}
        </div>
      )}

      {!itemsLength && !isSubmitting && !submitted && (
        <p className="fixed md:hidden top-[30%] left-[20%] z-50 text-white text-[7rem] font-lora">
          Cart is empty
        </p>
      )}

      <CheckoutItems />
      {showForm && <MobileForm submitData={onSubmitUserData} />}
      <Backdrop closeModal={props.closeModal} />
    </div>
  );
};

export default MobileCart;
