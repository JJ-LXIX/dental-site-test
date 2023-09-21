import React from "react";
import Column from "./Column";

type Props = {};

function SmallScreenTestimonial({}: Props) {
  return (
    <div className="min-h-screen w-full bg-[#141414] pb-10">
      <div className="flex min-h-screen w-full flex-col items-center space-y-2 md:space-y-10">
        <div className="h-[40svh] w-3/4 rounded-2xl bg-pink-200 md:w-7/12"></div>
        <div className="h-[40svh] w-3/4 rounded-2xl bg-pink-200 md:w-7/12"></div>
        <div className="h-[40svh] w-3/4 rounded-2xl bg-pink-200 md:w-7/12"></div>
      </div>
    </div>
  );
}

export default SmallScreenTestimonial;
