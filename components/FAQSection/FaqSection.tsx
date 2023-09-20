"use client";
import React, { useEffect, useState } from "react";
import Accordian from "./Accordian";
import Image from "next/image";
import smilingPatient from "../../public/images/woman-dentist-patient.jpg";
import { motion } from "framer-motion";

type Props = {};

const variants = {
  initial: {
    opacity: 0,
    x: "-50%",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};
const variants2 = {
  initial: {
    opacity: 0,
    x: "50%",
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

function FaqSection({}: Props) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  if (isMobile)
    return (
      <div className="w-full rounded-b-[5rem] bg-[#1e1e1e] pb-28 lg:pb-20 lg:pt-10">
        {/* Text & FAQ */}
        <div className="mx-auto flex flex-col items-center md:max-w-3xl md:flex-row md:justify-center lg:max-w-6xl xl:mx-auto ">
          <div className="w-full px-5 ">
            <h2 className="text-center text-4xl font-semibold text-zinc-100 lg:max-w-md lg:text-5xl">
              Frequently Asked Questions for a Healthy Smile.
            </h2>
            <h3 className="mt-2 text-center text-lg text-sky-300 lg:mt-4 lg:max-w-lg lg:text-lg">
              Find solutions to your dental concerns with our comprehensive FAQ
              section, or Contact Us for more detailed information!
            </h3>
            <Accordian />
          </div>

          {/* Image */}
          <div className="mt-10 flex h-[40svh] w-full items-center justify-start  px-5 md:h-[50vh] lg:mt-0 lg:h-screen">
            <div className="relative h-[100%] w-full overflow-hidden rounded-l-3xl rounded-tr-3xl border-4 border-dashed border-white shadow-lg md:h-[80%]">
              <Image
                src={smilingPatient}
                fill
                alt="smiling dental patient"
                style={{ objectFit: "cover" }}
                className="rounded-l-3xl rounded-tr-3xl p-2"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="w-full rounded-b-[5rem] bg-[#1e1e1e] pb-28 lg:pb-20 lg:pt-10">
      {/* Text & FAQ */}
      <div className="flex flex-col items-center md:flex-row md:justify-center lg:max-w-6xl xl:mx-auto ">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.3, type: "easeOut" }}
          viewport={{ once: true }}
          className="w-full px-5 "
        >
          <h2 className="text-left text-4xl font-semibold text-zinc-100 lg:max-w-md lg:text-5xl">
            Frequently Asked Questions for a Healthy Smile.
          </h2>
          <h3 className="mt-2 text-left text-lg text-sky-300 lg:mt-4 lg:max-w-lg lg:text-lg">
            Find solutions to your dental concerns with our comprehensive FAQ
            section, or Contact Us for more detailed information!
          </h3>
          <Accordian />
        </motion.div>

        {/* Image */}
        <div className="flex h-screen w-full items-center  justify-start overflow-hidden px-5 md:h-[50vh] lg:h-screen">
          <motion.div
            variants={variants2}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.3, type: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[80%] w-full overflow-hidden rounded-l-3xl rounded-tr-3xl border-8 border-dashed border-white shadow-lg"
          >
            <Image
              src={smilingPatient}
              fill
              alt="smiling dental patient"
              style={{ objectFit: "cover" }}
              className="rounded-l-3xl rounded-tr-3xl p-2"
              placeholder="blur"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
