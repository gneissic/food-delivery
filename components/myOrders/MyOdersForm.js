import { cartActions } from "@/store/cart-slice";
import { inputActions } from "@/store/input-slice";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

const MyOdersForm = (props) => {
  const dispath = useDispatch();
  const [userName, setUserName] = useState("");
  const [userNameIsTouched, setUserNameIsTouched] = useState(false);
  const userIsValid = userName.trim() !== "";
  const userIsInValid = !userIsValid && userNameIsTouched;
  const [lastName, setLastName] = useState("");
  const [lastNameIsTouched, setLastNameIsTouched] = useState(false);
  const lastNameIsValid = lastName.trim() !== "";
  const lastNameIsInValid = !lastNameIsValid && lastNameIsTouched;
  const [number, setNumber] = useState("");
  const [numberIsTouched, setNumberIsTouched] = useState(false);
  const numberIsValid = number.length > 10;
  const numberIsInvalid = !numberIsValid && numberIsTouched;
  const [address, setAddress] = useState("");
  const [addressIsTouched, setAddressIsTouched] = useState(false);
  const addressIsValid = address.trim() !== "";
  const addressIsInValid = !addressIsValid && addressIsTouched;
  const formIsValid =
    userIsValid && lastNameIsValid && numberIsValid && addressIsValid;

  const onChangeUserHandler = (e) => {
    setUserName(e.target.value);
  };
  const onBlurNameHandler = () => {
    setUserNameIsTouched(true);
  };

  const onChangeLastHandler = (e) => {
    setLastName(e.target.value);
  };
  const onBlurLastHandler = () => {
    setLastNameIsTouched(true);
  };
  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const onBlurNumberHandler = () => {
    setNumberIsTouched(true);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setLastName("");
    setUserName("");
    setNumber("");
    setAddress("");
    setLastNameIsTouched(false);
    setUserNameIsTouched(false);
    setAddressIsTouched(false);
    setNumberIsTouched(false);
    if (!formIsValid) {
      return;
    }
    props.addUserOrder({
      userName,
      lastName,
      address,
      number,
    });
    dispatch(cartActions.onClearCart());
    dispatch(inputActions.onHideForm());
  };
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const onBlurAddress = () => {
    setAddressIsTouched(true);
  };
  const dispatch = useDispatch();
  const hideFormHandler = (e) => {
    e.preventDefault();
    dispatch(inputActions.onHideForm());
  };

  const inputClasses =
    "outline-none font-pops w-[80%] h-[2rem] border rounded pl-2";
  const nameClass = `${inputClasses}  ${
    userIsInValid ? "bg-red-400 text-white" : ""
  }`;
  const LastNameClass = `${inputClasses}  ${
    lastNameIsInValid ? "bg-red-400 text-white" : ""
  }`;
  const numberClass = `${inputClasses}  ${
    numberIsInvalid ? "bg-red-400 text-white" : ""
  }`;
  const addressClass = `${inputClasses}  ${
    addressIsInValid ? "bg-red-400 text-white" : ""
  }`;
  return (
    <Fragment>
      <form
        className="hidden  md:grid gap-y-3 pl-3 font-pops"
        onSubmit={onSubmitHandler}
      >
        <div className="h-[12rem] overflow-y-scroll">
          <div>
            <label htmlFor="Surname"> Surname:</label>
            <br />
            <input
              onChange={onChangeUserHandler}
              onBlur={onBlurNameHandler}
              type="text"
              value={userName}
              placeholder="Enter Surname"
              className={nameClass}
            />
            {userIsInValid && (
              <p className="text-red-900 font-lora">
                please enter a valid surname.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="Lastame">Last name:</label>
            <br />
            <input
              value={lastName}
              onBlur={onBlurLastHandler}
              onChange={onChangeLastHandler}
              type="text"
              placeholder="Enter Lastname"
              className={LastNameClass}
            />
            {lastNameIsInValid && (
              <p className="text-red-900 font-lora">
                please enter a valid last name.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="Postal Code">Whatsapp Number:</label>
            <br />
            <input
              onChange={onChangeNumber}
              onBlur={onBlurNumberHandler}
              value={number}
              type="tel"
              className={numberClass}
            />
            {numberIsInvalid && (
              <p className="text-red-900 font-lora">
                write correct number abeg.
              </p>
            )}
          </div>
          <div>
            <p className="text-sm pb-[0.5rem] font-semibold">
              Delivery address
            </p>
            <input
              value={address}
              onBlur={onBlurAddress}
              onChange={onChangeAddress}
              type="address"
              placeholder="Enter Address"
              className={addressClass}
            />
            {addressIsInValid && (
              <p className="text-red-900">please enter a valid address</p>
            )}
          </div>
          <div className="flex justify-around items-center">
            <button
              onClick={hideFormHandler}
              className="bg-red-800 py-2 px-4 mt-2 font-nun text-white font-semibold rounded-md hover:bg-green-800 transition-all ease duration-300 "
            >
              Cancel
            </button>

            <button
              disabled={!formIsValid}
              className="bg-red-800 py-2 px-4 mt-2 font-nun text-white font-semibold rounded-md hover:bg-green-800 transition-all ease duration-300  disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default MyOdersForm;
