import { cartActions } from "@/store/cart-slice";
import React from "react";
import { useDispatch } from "react-redux";

const Modal = (props) => {
  const dispatch = useDispatch();
  const onAddItemsHandler = () => {
    dispatch(
      cartActions.onAddToCart({
        id: props.id,
        title: props.title,
        image: props.image,
        totalPrice: props.totalprice,
        quantity: props.quantity,
      })
    );
  };
  const removeItemsHandler = () => {
    const id = props.id;
    dispatch(cartActions.onRemoveFromCart(id));
  };
  const clearItemHandler = () => {
    const id = props.id;
    dispatch(cartActions.onRemoveSingleItem(id));
  };
  return (
    <div>
      <div className="md:hidden font-pops  text-white">
        <div className="relative flex gap-[3rem] text-slate-700 bg-white py-[2rem] w-[57rem] border rounded-lg">
          <div className=" w-[25rem] h-[20rem] overflow-y-hidden rounded-lg ml-[1rem] ">
            <img className="w-[26rem] h-[22rem]" src={props.image} />
          </div>
          <div className="font-pops">
            <h1 className="text-[3rem]">{props.title}</h1>
            <p className="text-[2.5rem] mt-[1rem] font-bold">{props.general}</p>
            <p className="text-[3rem] font-bold">${props.totalPrice}</p>
            <div className="border border-slate-400 rounded-t-lg px-5 py-3 absolute flex items-center  bottom-0 right-[24%] gap-[3rem] text-[3rem]  h-[5rem]">
              <button onClick={removeItemsHandler}>-</button>
              <p className=" font-bold">{props.quantity}</p>
              <button onClick={onAddItemsHandler}>+</button>
            </div>
            <div className="text-[3rem] font-bold text-amber-600 absolute right-[8%] bottom-[2%]">
              <button onClick={clearItemHandler}>X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
