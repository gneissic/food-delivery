import React from "react";

const Backdrop = (props) => {
  return (
    <div onClick={props.closeModal}
    className="w-full h-full inset-0 bg-black/70 fixed md:hidden z-40"></div>
  );
};

export default Backdrop;
