import React from "react";

const NavCard = (props) => {
  return (
    <div className="bg-[#77002e] shadow-lg shadow-black/50 w-full h-[10rem] fixed z-30 ">
      {props.children}
    </div>
  );
};

export default NavCard;
