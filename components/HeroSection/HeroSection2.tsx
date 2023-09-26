"use client";
import Image from "next/image";
import React, { useRef } from "react";
import DentalOfficeHero from "public/images/dental-office.jpg";
import { useScroll, useTransform, motion } from "framer-motion";

type Props = {
  isSmallScreen: boolean;
};

export default function HeroSection2({ isSmallScreen }: Props) {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yAxis = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div ref={heroRef} className="w-full md:pr-10">
      {/* Hero Image */}
      <div>
        <div className="relative  h-[90svh] w-full overflow-hidden  md:h-[65vh] md:rounded-br-[3rem] lg:h-[80vh] xl:h-[95vh]">
          <Image
            src={DentalOfficeHero}
            fill
            priority={true}
            alt="Image of our Dental Office"
            style={{ objectFit: "cover" }}
            placeholder="blur"
          />

          {/* Hero Text */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center font-medium text-white lg:inset-auto lg:bottom-[13rem] lg:left-5 lg:text-left xl:bottom-48 3xl:bottom-24">
            <motion.h1
              style={isSmallScreen ? {} : { y: yAxis }}
              className="flex flex-col space-y-5 text-5xl md:text-[6rem] lg:text-[8rem] 2xl:text-[9.5rem] 3xl:text-[10.5rem] 4xl:text-[13rem]"
            >
              <span>CRAFTING </span>
              <span>YOUR SMILES</span>
            </motion.h1>
          </div>

          {/* TODO:HERO CTA BUTTON */}

          {/* Transparent gradient  */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/40 to-[75%]"></div>

          {/* Hero Subline */}
          <div>
            <div className="absolute bottom-0 right-0 z-30 h-32 w-full break-words bg-white  p-2 pt-5 text-center md:h-32 md:w-[22rem] md:rounded-tl-3xl md:px-7 md:py-4 md:pt-0 md:text-left lg:h-36 lg:w-[30rem] xl:h-44">
              <h2 className="py-3 text-center text-lg font-semibold text-zinc-800 md:max-w-full md:text-lg  lg:text-left xl:text-xl xl:leading-10">
                "Elevate Your Oral Wellness: Discover the Perfect Blend of
                Expertise, Technology, and Personalized Care."
              </h2>

              {/* Bottom /Left SVG */}
              <svg
                width="45"
                height="45"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-[35%] left-0 rotate-90   md:bottom-0 md:left-[-12.6%] md:right-auto md:top-auto md:block md:rotate-0  lg:left-[-9.3%] xl:left-[-9%] 3xl:left-[-9.3%] 4xl:bottom-0"
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
                className="absolute -top-[35%] right-0 md:top-[-27%] md:block lg:top-[-25%]"
              >
                <path
                  d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
