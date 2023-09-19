import Image from "next/image";
import React from "react";
import DentalOfficeHero from "public/images/dental-office.jpg";

type Props = {};

export default function HeroSection2({}: Props) {
  return (
    <div className=" w-full  md:pr-10 lg:block lg:h-screen">
      {/* Hero Image */}
      <div>
        <div className=" relative h-[60svh] w-full overflow-hidden md:h-[65vh] md:rounded-br-[3rem] xl:h-[95vh]">
          <Image
            className=""
            src={DentalOfficeHero}
            fill
            alt="Image of our Dental Office"
            style={{ objectFit: "cover" }}
          />

          {/* Hero Text */}
          <div className="absolute inset-0 z-20 flex items-center  justify-center text-center font-medium text-white lg:inset-auto lg:bottom-20 lg:left-5 lg:text-left">
            <h1 className=" 3xl:text-[10.5rem] 4xl:text-[13rem]  flex flex-col space-y-5 text-5xl lg:text-[6rem] xl:text-[7rem] 2xl:text-[9.5rem]">
              <span>CRAFTING </span>
              <span>YOUR SMILES</span>
            </h1>
          </div>

          {/* TODO:HERO CTA BUTTON */}

          {/* Transparent gradient  */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/40 to-[75%]"></div>
        </div>
      </div>

      {/* Hero Subline */}
      <div>
        <div className="right-10 z-20 h-32 w-full bg-white p-2 pt-5 text-center md:absolute md:bottom-[34.9svh] md:h-40 md:w-[22rem] md:rounded-tl-3xl md:px-7 md:py-4 md:pt-0 md:text-left xl:bottom-[5vh] xl:h-48 xl:w-[30rem]">
          <h2 className=" text-lg font-semibold text-zinc-800 md:py-3 md:text-xl xl:text-2xl xl:leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            Lorem, ipsum dolor accusamus sequi debitis recusandae.
          </h2>

          {/* Bottom /Left SVG */}
          <svg
            width="45"
            height="45"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 hidden md:left-[-12.6%] md:block lg:left-[-9.3%]"
          >
            <path
              d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
              fill="white"
            ></path>
          </svg>
          {/* Top/ Right SVG */}
          <svg
            width="45"
            height="45"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 hidden md:top-[-27%] md:block lg:top-[-23.2%]"
          >
            <path
              d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
