import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import dentistPatient from "../../public/images/woman-dentist-patient.jpg";
import Veeners from "../../public/images/veneers.jpg";
import Invisalign from "../../public/images/invisalign.jpg";
import OralSurgery from "../../public/images/oral-surgery.jpg";
import Emergencies from "../../public/images/emergencies.jpg";
import whiteTeeth from "../../public/images/whiteTeeth.jpg";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import useMousePosition from "@/lib/hooks/useMousePosition";

type Props = {
  isSmallScreen: boolean;
  setClickable: Dispatch<SetStateAction<boolean>>;
};

const services = [
  {
    name: "Comprehensive Care",
    image: dentistPatient,
    text: `"Plaque buildup leads to dental issues; routine cleanings in Williamsburg maintain long-lasting oral health."`,
  },
  {
    name: "Porcelain Veneers",
    image: Veeners,
    text: `"Revamp your smile with Porcelain Veneers—transform teeth color, shape, and length for an amazing, confident look!"`,
  },
  {
    name: "Invisalign",
    image: Invisalign,
    text: `"Clear aligners promote healthy tooth movement, simplifying brushing and flossing while avoiding metal brackets."`,
  },
  {
    name: "Teeth Whitening",
    image: whiteTeeth,
    text: `"Brighten your smile with professional teeth whitening, unveiling a radiant, confident you."`,
  },
  {
    name: "Oral Surgery",
    image: OralSurgery,
    text: `"Precision Procedures for Improved Oral Health and Enhanced Well-Being."`,
  },
  {
    name: "Emergencies",
    image: Emergencies,
    text: `"We're here for dental emergencies, offering flexible hours and prioritizing your comfort and relief."`,
  },
];

export default function ServiceSection({ isSmallScreen, setClickable }: Props) {
  const [serviceImage, setServiceImage] = useState<StaticImageData | string>(
    dentistPatient,
  );
  const [hovered, setHovered] = useState(false);
  const mousePosition = useMousePosition();

  // Mouse Move

  if (isSmallScreen) {
    return (
      <div className="min-h-screen  bg-[#141414]">
        <h2 className="pt-10 text-center text-3xl font-semibold text-white md:text-5xl">
          Our Services
        </h2>

        <div className="mx-auto mt-10 flex h-[80vh] w-full items-center justify-center md:w-5/6">
          <div className="bg flex h-4/6 w-11/12 flex-col justify-around px-5">
            {services.map((service) => {
              return (
                // Services Text

                <div
                  key={service.name}
                  onClick={() => setServiceImage(service.image)}
                  className="flex h-full w-full animate-pulse items-center border-b-2 border-zinc-200  text-lg text-white md:w-9/12"
                >
                  {service.name}
                </div>
              );
            })}
          </div>
          <div className="relative h-5/6 w-4/6 self-center md:w-5/6 ">
            <Image
              src={serviceImage}
              alt="service images"
              fill
              sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 40vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="min-h-screen overflow-hidden  bg-[#141414]">
        <h2 className="pt-10 text-center text-3xl font-semibold text-white md:text-5xl">
          Our Services
        </h2>

        <div className="mx-auto mt-10 flex h-[80vh] w-11/12 items-center justify-center 3xl:w-5/6">
          <div
            onMouseEnter={() => setClickable(true)}
            onMouseLeave={() => setClickable(false)}
            className="relative flex h-5/6 w-full flex-col justify-around px-5 3xl:w-11/12"
          >
            {services.map((service) => {
              return (
                // Services Text

                <div
                  key={service.name}
                  onMouseEnter={() => {
                    setServiceImage(service.image);
                    setHovered(true);
                  }}
                  onMouseLeave={() => setHovered(false)}
                  className="relative flex h-full w-full items-center justify-between border-b-2  border-zinc-200 text-xl text-white"
                >
                  {service.name}
                  <div className="text-pretty text-end text-base text-white lg:max-w-[60%]">
                    <p>{service.text}</p>
                  </div>
                </div>
              );
            })}
            <AnimatePresence>
              {hovered ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  animate={{
                    opacity: 1,
                    x: mousePosition.x - 400,
                    y: mousePosition.y - 300,
                    rotateZ: (mousePosition.x - 700) * 0.04,
                  }}
                  exit={{ opacity: 0 }}
                  className="absolute top-0 h-3/6 w-2/6 self-center"
                >
                  <Image
                    src={serviceImage}
                    alt="service images"
                    fill
                    sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
}
