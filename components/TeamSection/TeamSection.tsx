import React from "react";

type Props = {};

export default function TeamSection({}: Props) {
  return (
    <div className="min-h-screen w-full bg-[#141414]  pb-20">
      <div className="min-h-screen w-full xl:flex xl:flex-row xl:justify-between">
        <h3 className="text-center text-3xl font-semibold text-white xl:w-1/2 xl:text-7xl">
          Our Team
        </h3>

        <div className="Team__Images flex flex-col items-center gap-5  pt-10 md:mx-8 md:grid md:grid-cols-2 md:grid-rows-2  xl:w-full  xl:justify-items-center xl:gap-4 xl:pt-0">
          <div className="h-[60svh] w-10/12 bg-red-200 md:h-[50svh] md:w-full  xl:h-[70vh]">
            <div className="h-3/4 w-full"></div>
            <div className="h-1/4 w-full bg-[#202020]"></div>
          </div>
          <div className="h-[60svh] w-10/12 bg-red-200 md:h-[50svh] md:w-full xl:h-[70vh]">
            <div className="h-3/4 w-full"></div>
            <div className="h-1/4 w-full bg-[#202020]"></div>
          </div>
          <div className="h-[60svh] w-10/12 bg-red-200 md:h-[50svh] md:w-full xl:h-[70vh]">
            <div className="h-3/4 w-full"></div>
            <div className="h-1/4 w-full bg-[#202020]"></div>
          </div>
          <div className="hidden h-[60svh] w-10/12 bg-red-200 md:block md:h-[50svh] md:w-full xl:h-[70vh]">
            <div className="h-3/4 w-full"></div>
            <div className="h-1/4 w-full bg-[#202020]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
