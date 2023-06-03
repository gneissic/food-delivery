import React from "react";
import MobileNav from "./MobileNav";

const MobileHeader = (props) => {
  return (
    <div className="md:hidden block">
      <MobileNav openModal={props.openModal} />
      <div className="w-[70rem] h-[90rem]">
        <img
          src="https://img.freepik.com/premium-vector/3d-fast-delivery-phone-via-scooter-ecommerce-concept-online-food-ordering-infographic_420121-274.jpg?w=2000"
          className="w-[70rem] h-[90rem]"
        />
      </div>
    </div>
  );
};

export default MobileHeader;
