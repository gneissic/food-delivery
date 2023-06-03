import React, { Fragment } from "react";

const Input = () => {
  return (
    <Fragment>
      <div className=" hidden md:block relative w-[90vw] ml-[1rem] mt-[1rem]">
        <div className="absolute top-4 left-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-gray-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="what would you like to eat?"
          className="w-[70%] px-[5rem] py-3 border rounded-md font-nun outline-none border-none bg-gray-200 font-semibold text-slate-500"
        />
      </div>
    </Fragment>
  );
};

export default Input;
