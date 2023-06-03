import React, { Fragment } from "react";
import Input from "./Input";
import BannerSlider from "./BannerSlider";

const Header = () => {
  return (
    <Fragment>
      <div className=" w-[100vw] md:w-[73%]">
        <Input />
        <BannerSlider />
      </div>
    </Fragment>
  );
};

export default Header;
