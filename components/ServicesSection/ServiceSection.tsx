import React, { useEffect, useState } from "react";
import dentistPatient from "../../public/images/woman-dentist-patient.jpg";
import healthCareWorker from "../../public/images/Healthcare_worker.png";
import Veeners from "../../public/images/veneers.jpg";
import Invisalign from "../../public/images/invisalign.jpg";
import OralSurgery from "../../public/images/oral-surgery.jpg";
import Emergencies from "../../public/images/emergencies.jpg";
import whiteTeeth from "../../public/images/whiteTeeth.jpg";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Props = { isMobile: boolean; mousePosition: { x: number; y: number } };

const services = [
  { name: "Comprehensive Care", image: dentistPatient },
  { name: "Porcelain Veneers", image: Veeners },
  { name: "Invisalign", image: Invisalign },
  { name: "Teeth Whitening", image: whiteTeeth },
  { name: "Oral Surgery", image: OralSurgery },
  { name: "Emergencies", image: Emergencies },
];

export default function ServiceSection({ isMobile, mousePosition }: Props) {
  const [serviceImage, setServiceImage] = useState<StaticImageData | string>(
    dentistPatient,
  );
  const [hovered, setHovered] = useState(false);

  // Mouse Move

  if (isMobile) {
    return (
      <div className="min-h-screen rounded-t-[5rem] bg-[#1e1e1e]">
        <h2 className="pt-10 text-center text-3xl font-semibold text-white md:text-5xl">
          Our Services
        </h2>

        <div className="mx-auto mt-10 flex h-[80svh] w-full items-center justify-center md:w-5/6">
          <div className="bg flex h-4/6 w-11/12 flex-col justify-around px-5">
            {services.map((service) => {
              return (
                // Services Text
                <div
                  key={service.name}
                  onClick={() => setServiceImage(service.image)}
                  className="flex h-full w-full items-center  border-b-2 border-zinc-200 text-lg text-white"
                >
                  {service.name}
                </div>
              );
            })}
          </div>
          <div className="relative h-5/6 w-4/6 self-center bg-pink-200">
            <Image
              src={serviceImage}
              alt="service images"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="min-h-screen overflow-hidden rounded-t-[5rem] bg-[#1e1e1e]">
        <h2 className="pt-10 text-center text-3xl font-semibold text-white md:text-5xl">
          Our Services
        </h2>

        <div className="mx-auto mt-10 flex h-[80svh] w-full items-center justify-center md:w-5/6">
          <div className="relative flex h-5/6 w-11/12 flex-col justify-around px-5">
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
                  className="relative flex h-full w-full cursor-pointer items-center  border-b-2 border-zinc-200 text-3xl text-white"
                >
                  {service.name}
                </div>
              );
            })}
            <AnimatePresence>
              {hovered ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    opacity: 1,
                    x: mousePosition.x - 300,
                    y: mousePosition.y - 400,
                    rotateZ: (mousePosition.x - 700) * 0.04,
                  }}
                  exit={{ opacity: 0 }}
                  className="absolute top-0 h-5/6 w-4/6 self-center bg-pink-200 4xl:w-3/6"
                >
                  <Image
                    src={serviceImage}
                    alt="service images"
                    fill
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
