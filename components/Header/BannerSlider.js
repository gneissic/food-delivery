import React, { Fragment } from "react";

const BannerSlider = () => {
  return (
    <Fragment>
      <div className=" md:h-[28rem] md:w-[97%] ml-[1rem] mt-[3rem] border relative rounded-md  overflow-hidden ">
        <div className="triangle absolute z-10 rotate-[45deg] left-[20rem] top-3 "></div>
        <div className="triangle absolute z-10 bottom-10 rotate-[330deg] left-[1rem]"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="text-[4rem] font-lora bg-amber-700 absolute h-full w-[60%] text-center pt-[5rem]">
          <h1 className="font-bold text-black font-mono">30% Off</h1>
          <h1 className="text-gray-300">Fitness Meal</h1>
        </div>
        <div>
          <img
            className="absolute -z-10 top-0 right-0 h-[500px] w-[480px]"
            alt="bannar"
            src="https://media.istockphoto.com/id/1134000433/photo/woman-eating-salad.jpg?s=612x612&w=0&k=20&c=5O7aRIKFVga2mcgZPPjH13kCRDRilsRR3-mwdnS0JQ4="
          />
        </div>
      </div>
    </Fragment>
  );
};

export default BannerSlider;
