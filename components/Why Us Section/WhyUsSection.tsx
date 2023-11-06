"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SmilingWoman from "../../public/images/whyUs.jpg";
import CardComponent from "./CardComponent";
import { motion } from "framer-motion";

type Props = { isMobile: boolean };

const variants1 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const variants2 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const transition = { ease: "easeInOut", duration: 0.3 };

function WhyUsSection({ isMobile }: Props) {
  if (isMobile)
    return (
      <div className="flex w-full items-center bg-white py-14 text-black lg:min-h-screen  lg:py-20">
        <div className="flex w-full justify-center ">
          {/* Adjust width of container */}
          <div className="flex w-full flex-col md:flex-row lg:max-w-6xl ">
            {/* Left Side */}
            <div className="flex h-[55vh] w-full items-center justify-center md:mt-[5rem] md:h-auto md:items-start lg:mt-0">
              <div className="relative h-[90%] w-[65%] overflow-hidden rounded-r-[5rem] rounded-tl-[5rem] border-4 border-dashed border-black md:h-[60%]  lg:h-[100%] lg:w-[65%]">
                <Image
                  src={SmilingWoman}
                  style={{ objectFit: "cover" }}
                  fill
                  alt="Image of a woman smiling"
                  className="rounded-r-[5rem] rounded-tl-[5rem] p-2"
                  placeholder="blur"
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex w-full items-center md:min-h-[70vh] ">
              <div className=" w-full p-4">
                <h2 className="text-center text-4xl font-semibold lg:max-w-[90%] lg:text-left lg:text-5xl">
                  Why You Should Choose Our Dental Service?
                </h2>
                <h3 className="mt-4 text-center text-lg text-black md:max-w-[90%] lg:text-left">
                  Discover why our dental service stands out from the rest. From
                  our experienced team to our state-of-the-art equipment, we
                  provide exceptional care for all your dental needs.
                </h3>

                {/* Cards */}
                <div>
                  <div className="my-6 min-h-[6rem] rounded-3xl border border-zinc-600/70 md:w-[90%] ">
                    <CardComponent number={0} />
                  </div>
                  <div className="my-6 min-h-[6rem] rounded-3xl border border-zinc-600/70 md:w-[90%] ">
                    <CardComponent number={1} />
                  </div>
                  <div className="my-6 min-h-[6rem] rounded-3xl border border-zinc-600/70 md:w-[90%] ">
                    <CardComponent number={2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="flex w-full items-center bg-white py-14 text-black lg:min-h-screen  lg:py-20">
      <div className="flex w-full justify-center ">
        {/* Adjust width of container */}
        <div className="flex w-full flex-col md:flex-row lg:max-w-6xl ">
          {/* Left Side */}
          <div className="flex h-[55vh] w-full items-center justify-center md:mt-[5rem] md:h-auto md:items-start lg:mt-0 ">
            <motion.div
              variants={variants1}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ ...transition }}
              className="relative h-[90%] w-[65%] overflow-hidden rounded-r-[5rem] rounded-tl-[5rem] border-4 border-dashed border-black  lg:h-[100%]  lg:w-[65%] lg:border-8"
            >
              <Image
                src={SmilingWoman}
                style={{ objectFit: "cover" }}
                fill
                alt="Image of a woman smiling"
                className="rounded-r-[5rem] rounded-tl-[5rem] p-2"
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
                placeholder="blur"
              />
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="flex w-full items-center md:min-h-[70vh] ">
            <motion.div
              variants={variants2}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ ...transition }}
              className=" w-full p-4"
            >
              <motion.h2
                variants={variants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.3, ...transition }}
                className="text-4xl font-semibold lg:max-w-[90%] lg:text-5xl"
              >
                Why You Should Choose Our Dental Service?
              </motion.h2>
              <motion.h3
                variants={variants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.6, ...transition }}
                className="mt-4 text-black md:max-w-[90%] lg:text-xl"
              >
                Discover why our dental service stands out from the rest. From
                our experienced team to our state-of-the-art equipment, we
                provide exceptional care for all your dental needs.
              </motion.h3>

              {/* Cards */}
              <motion.div
                variants={variants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.9, ...transition }}
              >
                <div className="my-6 min-h-[6rem] rounded-3xl border border-zinc-500/70 md:w-[90%] ">
                  <CardComponent number={0} />
                </div>
                <div className="my-6 min-h-[6rem] rounded-3xl border border-zinc-500/70 md:w-[90%] ">
                  <CardComponent number={1} />
                </div>
                <div className="my-6 min-h-[6rem] rounded-3xl border border-zinc-500/70 md:w-[90%] ">
                  <CardComponent number={2} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUsSection;
