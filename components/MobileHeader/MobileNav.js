import React from "react";
import NavCard from "./NavCard";
import MobileCartButton from "./MobileCartButton";

const MobileNav = (props) => {
  return (
    <NavCard>
      <MobileCartButton openModal={props.openModal} />
    </NavCard>
  );
};

export default MobileNav;
