import { cartActions } from "@/store/cart-slice";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyOderItems = (props) => {
  const showForm = useSelector((state) => state.input.showForm);
  const dispatch = useDispatch();
  const addMealToCartHandler = () => {
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
  const id = props.id;
  const removeFromCartHandler = () => {
    dispatch(cartActions.onRemoveFromCart(id));
  };
  return (
    <Fragment>
      {!showForm && (
        <div>
          <div className="bg-white my-[0.5rem]  flex h-[7rem] border rounded-md gap-[2rem] cursor-pointer pt-1  font-nun">
            <div className="w-[35%] h-[95%] overflow-hidden  border rounded-md ml-2">
              <img className="h-[100%]" src={props.image} />
            </div>
            <div>
              <p>{props.title}</p>
              <div className="flex items-center gap-4">
                <div className="flex gap-2 mt-[2rem] items-center">
                  <p
                    className="text-lg font-bold text-black"
                    onClick={removeFromCartHandler}
                  >
                    -
                  </p>
                  <div className="bg-gray-200 w-[3.5rem] h-[2rem] text-slate-800 text-center grid items-center border rounded-md">
                    {props.quantity}
                  </div>
                  <div
                    className="text-lg font-bold text-black"
                    onClick={addMealToCartHandler}
                  >
                    +
                  </div>
                </div>
                <div>
                  <p className="mt-[2rem] font-bold text-md text-green-900">
                    ${props.totalPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MyOderItems;
