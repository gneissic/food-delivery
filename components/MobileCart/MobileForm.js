import { cartActions } from "@/store/cart-slice";
import { inputActions } from "@/store/input-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Form = (props) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);
  const firstNameIsValid = firstName.trim() !== "";
  const firstNameIsInvalid = !firstNameIsValid && firstNameIsTouched;
  const [lastName, setLastName] = useState("");
  const [lastNameIsTouched, setLastNameIsTouched] = useState(false);
  const lastNameIsValid = lastName.trim() !== "";
  const lastNameIsInvalid = !lastNameIsValid && lastNameIsTouched;
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [numberIsTouched, setNumberIsTouched] = useState(false);
  const numberIsValid = whatsappNumber.trim() !== "";
  const numberIsInvalid = !numberIsValid && numberIsTouched;
  const [postalCode, setPostalCode] = useState("");
  const [postalIsTouched, setPostalIsTouched] = useState(false);
  const postalIsValid = postalCode.length === 4;
  const postalIsInvalid = !postalIsValid && postalIsTouched;
  const [gender, setGender] = useState("");
  const genderIsValid = gender.trim() !== "";
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [addressIsTouched, setAddressIsTouched] = useState(false);
  const addressIsValid = deliveryAddress.trim() !== "";
  const addressIsInvalid = !addressIsValid && addressIsTouched;
  const formIsValid =
    lastNameIsValid &&
    firstNameIsValid &&
    numberIsValid &&
    postalIsValid &&
    addressIsValid &&
    genderIsValid;

  const onCancelHandler = () => {
    dispatch(inputActions.onHideForm());
  };
  const onChangeFirstHandler = (e) => {
    setFirstName(e.target.value);
  };
  const onBlurLastHandler = () => {
    setLastNameIsTouched(true);
  };
  const onChangeLastHandler = (e) => {
    setLastName(e.target.value);
  };
  const onBlurFirstHandler = () => {
    setFirstNameIsTouched(true);
  };
  const onChangeNumber = (e) => {
    setWhatsappNumber(e.target.value);
  };
  const onBlurNumber = () => {
    setNumberIsTouched(true);
  };
  const onChangePostal = (e) => {
    setPostalCode(e.target.value);
  };
  const onBlurPostal = () => {
    setPostalIsTouched(true);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onBlurAddress = () => {
    setAddressIsTouched(true);
  };
  const onChangeAdress = (e) => {
    setDeliveryAddress(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    setFirstName("");
    setLastName("");
    setWhatsappNumber("");
    setDeliveryAddress("");
    setGender("");
    setPostalCode("");
    setFirstNameIsTouched(false);
    setLastNameIsTouched(false);
    setAddressIsTouched(false);
    setPostalIsTouched(false);
    setNumberIsTouched(false);
    props.submitData({
      firstName,
      lastName,
      whatsappNumber,
      postalCode,
      gender,
      deliveryAddress,
    });
    dispatch(cartActions.onClearCart());
    dispatch(inputActions.onHideForm());
  };
  const defaultClass =
    "h-[6rem] w-full rounded-md text-[3rem] text-semibold text-slate-700 outline-none";
  const firstClass = `${defaultClass} ${
    firstNameIsInvalid && "border-2 border-red-900 bg-red-400"
  }`;
  const lastClass = `${defaultClass} ${
    lastNameIsInvalid && "border-2 border-red-900 bg-red-400"
  }`;
  const numberClass = `${defaultClass} ${
    numberIsInvalid && "border-2 border-red-900 bg-red-400"
  }`;
  const postalClass = `${defaultClass} ${
    postalIsInvalid && "border-2 border-red-900 bg-red-400"
  }`;
  const addressClass = `${defaultClass} ${
    addressIsInvalid && "border-2 border-red-900 bg-red-400 grid items-center"
  }`;

  return (
    <div className="fixed z-50 left-[20%] top-[15%] text-gray-100 font-medium">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName" className="block mb-4 text-[4rem]">
            First Name:
          </label>
          <input
            onChange={onChangeFirstHandler}
            onBlur={onBlurFirstHandler}
            className={firstClass}
            type="text"
            id="firstName"
            value={firstName}
          />
          {firstNameIsInvalid && (
            <p className="text-amber-500 font-bold text-[2rem] font-lora">
              please input a valid first name
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-4 text-[4rem]">
            Last Name:
          </label>
          <input
            className={lastClass}
            onBlur={onBlurLastHandler}
            onChange={onChangeLastHandler}
            type="text"
            id="lastName"
            value={lastName}
          />
          {lastNameIsInvalid && (
            <p className="text-amber-500 font-bold text-[2rem] font-lora">
              please input a valid last name
            </p>
          )}
        </div>
        <div>
          <label htmlFor="whatsappNumber" className="block mb-4 text-[4rem]">
            WhatsApp Number:
          </label>
          <input
            onChange={onChangeNumber}
            onBlur={onBlurNumber}
            className={numberClass}
            type="tel"
            id="whatsappNumber"
            value={whatsappNumber}
          />
          {numberIsInvalid && (
            <p className="text-amber-500 font-bold text-[2rem] font-lora">
              we need Your number for feedback boss
            </p>
          )}
        </div>
        <div>
          <label htmlFor="postalCode" className="block mb-4 text-[4rem]">
            Postal Code:
          </label>
          <input
            onChange={onChangePostal}
            onBlur={onBlurPostal}
            className={postalClass}
            type="text"
            id="postalCode"
            value={postalCode}
          />
          {postalIsInvalid && (
            <p className="text-amber-500 font-bold text-[2rem] font-lora">
              postal code should be 4 characters
            </p>
          )}
        </div>
        <div>
          <label htmlFor="gender" className="block mb-4 text-[4rem]">
            Gender:
          </label>
          <select
            onChange={onChangeGender}
            className="mt-1 p-2 border text-gray-700 rounded-full h-[5rem] text-[2rem] grid"
            id="gender"
            value={gender}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="you are not sure">Not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="deliveryAddress" className="block mb-4 text-[4rem]">
            Delivery Address:
          </label>
          <textarea
            onBlur={onBlurAddress}
            onChange={onChangeAdress}
            className={addressClass}
            id="deliveryAddress"
            value={deliveryAddress}
          />
          {addressIsInvalid && (
            <p className="text-amber-500 font-bold text-[2rem] font-lora">
              please input a valid address
            </p>
          )}
        </div>
        <div className="flex justify-between">
          <button
            disabled={!formIsValid}
            type="submit"
            className="bg-amber-600  text-white text-[3rem] font-bold py-2 px-4 rounded-md mt-3 disabled:bg-gray-700"
          >
            Submit
          </button>
          <button
            onClick={onCancelHandler}
            type="button"
            className="bg-amber-600  text-white text-[3rem] font-bold py-2 px-4 rounded-md mt-3"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
