"use client";
import { Star } from "lucide-react";
import HealthCareWorkerIMG from "../../public/images/Healthcare_worker.png";
import WaveSVG from "../../public/images/lines_svg.svg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function HeroSection({}: Props) {
  const isMobile = window.innerWidth < 768;

  let textVariants = {};
  let imageVariants = {};

  if (!isMobile) {
    textVariants = {
      initial: { opacity: 0, x: -300 },
      animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 },
      },
    };

    imageVariants = {
      initial: { opacity: 0, x: 300 },
      animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3 },
      },
    };
  }

  return (
    <div className="relative min-h-screen w-full">
      {/* Emerald on XL+ screen */}
      <div className="right-0 hidden h-[80vh] w-6/12 bg-emerald-100 xl:absolute xl:block  2xl:h-[85vh]">
        <div className="h-[85vh] w-2/12 bg-white"></div>

        <motion.div
          variants={imageVariants}
          initial="initial"
          animate="animate"
          className="absolute bottom-0 z-10 min-h-[32rem] min-w-[28rem] 2xl:h-[38rem] 2xl:w-[32rem]"
        >
          <Image
            src={HealthCareWorkerIMG}
            priority={true}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="image of healthcare worker smiling"
          />
        </motion.div>

        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 h-2/6 w-2/4">
          <Image src={WaveSVG} alt="wave " fill style={{ objectFit: "fill" }} />
        </div>
      </div>

      <div className="flex min-h-screen w-full flex-col lg:flex-row xl:mx-auto xl:max-w-7xl">
        {/* Text Block */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="flex min-h-[50lvh] w-full flex-col items-start space-y-6 pb-16 pl-4 pr-1 pt-32 md:h-[70vh]  md:w-4/5 md:space-y-7 md:pl-10 lg:h-[65vh] lg:pl-20 lg:pt-40 2xl:h-[85vh]"
        >
          <h2 className="flex items-center space-x-2 pr-6 font-bold tracking-wider text-zinc-950 md:text-xl md:tracking-normal lg:text-lg lg:text-zinc-700">
            <span>
              <Star />
            </span>
            <span>EXPERT MEDICAL TREATMENT</span>
          </h2>
          <h1 className="text-5xl font-bold leading-[3.3rem] text-zinc-900 md:text-6xl md:leading-[5rem]  md:tracking-tight  lg:leading-[4.5rem] lg:tracking-tight">
            We follow a holistic approach to health care.
          </h1>
          <h2 className="pr-2 text-lg font-semibold tracking-tight text-zinc-700 md:pr-6 md:text-2xl ">
            Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod.
          </h2>
          <button className="w-58 flex h-14 cursor-pointer items-center justify-center border-2 bg-blue-800 p-4 font-semibold text-white transition duration-300 active:scale-90 md:h-20 md:w-64 md:text-xl lg:hover:border-sky-900 lg:hover:bg-white lg:hover:text-black lg:active:scale-90">
            Book an Appointment
          </button>
        </motion.div>

        {/* Image Block */}
        <div className="relative flex h-[40vh] w-full justify-center md:min-h-[50vh] lg:h-[90vh]">
          {/* Hero Image */}
          <div className="max-w-3/4 absolute bottom-0 z-10 min-h-[21rem] min-w-[18rem] md:min-h-[35rem] md:min-w-[30rem] xl:hidden">
            <Image
              src={HealthCareWorkerIMG}
              priority={true}
              fill
              alt="image of healthcare worker smiling"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Emerald Block */}
          <div className="flex min-h-[30lvh]  w-full flex-col md:min-h-[30vh] lg:h-[90vh] lg:flex-row">
            <div className="h-2/5  w-full lg:h-[90vh] lg:w-2/5"></div>
            <div className="relative h-3/5 w-full bg-emerald-100 lg:h-[90vh] lg:w-3/5 xl:hidden">
              {/* Waves */}

              {/* Top Right */}
              <div className="absolute left-0 top-0 h-5/6 w-3/4 rotate-180">
                <Image
                  src={WaveSVG}
                  priority={true}
                  alt="wave "
                  fill
                  style={{ objectFit: "fill" }}
                />
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-0 right-0 h-5/6 w-2/4">
                <Image
                  src={WaveSVG}
                  alt="wave "
                  fill
                  style={{ objectFit: "fill" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
