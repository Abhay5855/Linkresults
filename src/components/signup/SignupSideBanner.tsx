import React, { FC } from "react";
import image from "../../assets/images/image.png";

const SignupSideBanner:FC = () => {
  return (
    <div className="flex-grow text-white max-xl:hidden bg-side-banner flex flex-col justify-center items-center basis-1/3">
      <div className=" w-[72%] grid grid-rows-2 gap-6 tracking-tighter">
        <p className="text-2xl text-center font-bold">
          "With Buffer I can build social content out as far as I want into the
          future but also tailor campaigns if we see certain trends within the
          industry.”
        </p>
        <div className="flex flex-col justify-center items-center gap-1 p-0 m-0">
          <img src={image} alt="face" height={80} width={80} loading="lazy" />
          <p className="font-semibold">Justin Ozanich</p>
          <p className="font-normal">Marketing Manager</p>
          <p className="font-normal">Foster Coffee Company</p>
        </div>
      </div>
    </div>
  );
};

export default SignupSideBanner;
