// const price = `$${props.price.toFixed(2)}`;
// import Image from "next/image";
import { cartActions } from "@/store/cart-slice";
import React, { Fragment } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MealItem = (props) => {
  const [toggle, setToggle] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const showForm = useSelector((state) => state.input.showForm);
  const onToggleIcon = () => {
    setToggle(!toggle);
    setShowParagraph(true);
    setTimeout(() => {
      setShowParagraph(false);
    }, 1000);
  };
  const classToggle = `lg:w-6 lg:h-6  h-[4rem] w-[4rem]    text-red-900 lg:ml-1 ml-4 ${
    toggle ? "fill-red-900" : null
  }`;
  const green = showParagraph && toggle && (
    <p className="lg:text-[100%] text-[3rem] text-green-900 font-nun font-semibold animate-pulse">
      {props.title} added to favorites!!
    </p>
  );
  const red = !toggle && showParagraph && (
    <p className="lg:text-[100%] text-[3rem] text-red-900 font-nun font-semibold animate-pulse">
      {props.title} Removed!
    </p>
  );
  const dispatch = useDispatch();
  const addMealToCartHandler = () => {
    dispatch(
      cartActions.onAddToCart({
        title: props.title,
        price: props.price,
        id: props.id,
        image: props.img,
        general: props.gen,
      })
    );
  };
  return (
    <Fragment>
      <div>
        <div className="   md:w-[302px] md:h-[210px] cursor-pointer hover:shadow-md hover:shadow-black/30  transition-all ease duration-500  w-[95%] h-[63rem] border  shadow-xl ">
          <div className="  relative md:h-[200px] md:w-[300px] overflow-hidden border rounded-md h-[45rem] w-auto ">
            <img
              className="lg:h-[201px] lg:w-[301px] w-[100%] h-[45.5rem]"
              src={props.img}
              // width={201}
              // height={301}
              // style={{ height: 201, width: 301 }}
            />
            <div
              className="absolute top-3 right-3  w-[6rem] h-[6rem] lg:w-8 lg:h-8 bg-gray-400 rounded-full flex items-center"
              onClick={onToggleIcon}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={classToggle}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>

          <div>
            <div className=" flex font-semibold gap-0 lg:gap-[8rem]  pt-[2rem] lg:pt-2 justify-between lg:justify-normal ">
              <p className=" md:text-[100%] text-[3rem]">{props.title}</p>
              <p className="md:text-[100%] text-[3rem] mr-8 lg:mr-0">
                ${props.price}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold text-gray-400 md:text-[100%] text-[3rem]">
                {props.gen}
              </p>
              <button
                disabled={showForm}
                onClick={addMealToCartHandler}
                className=" md:text-[100%] text-[3rem] mr-8 bg-red-800 text-white font-semi-bold rounded-md lg:rounded-sm flex justify-center items-center  px-[2rem] py-[1rem] lg:px-4 lg:py-1 spacing-1 hover:translate-x-3 hover:scale-95 transition-all ease duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:translate-x-0 disabled:scale-95"
              >
                Order
              </button>
            </div>
            {green}
            {red}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MealItem;
