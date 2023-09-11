"use client";
import { useState } from "react";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import { Phone } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const navLinks = [
  {
    index: 1,
    link: "about",
    name: "About Us",
  },
  {
    index: 1.5,
    link: "services",
    name: "Our Services",
  },
  {
    index: 2,
    link: "contact",
    name: "Contact Us",
  },
];

function Navbar({}: Props) {
  const [openedDrawer, setOpenedDrawer] = useState(false);

  function handleClick() {
    setOpenedDrawer((prev) => !prev);
  }

  const drawerAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 * index,
        type: "spring",
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <>
      <div
        className={`fixed z-50 flex items-center justify-between w-full h-20 md:h-24 px-5  shadow-md ${
          openedDrawer ? "bg-sky-900" : "bg-white"
        }
        }`}
      >
        <h2
          className={`text-lg md:text-2xl font-semibold ${
            openedDrawer ? "text-white" : "text-black"
          }`}
        >
          LOGO
        </h2>
        <div className="btn">
          <button
            className={`h-12 md:h-14 px-2 transition duration-300 border-2  rounded-md md:w-32 w-28 active:scale-90 ${
              openedDrawer
                ? "border-white text-white"
                : "border-sky-950 text-sky-950"
            }`}
          >
            <span className="flex items-center justify-around font-semibold md:text-xl">
              <Phone />
              Call us
            </span>
          </button>
        </div>
        <div className="w-10 h-10 md:w-14 md:h-14" onClick={handleClick}>
          <HamburgerIcon openedDrawer={openedDrawer} />
        </div>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {openedDrawer ? (
          <motion.div
            initial={{ y: -2000 }}
            animate={{ y: 0 }}
            exit={{ y: -2000 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 z-30 flex flex-row items-start justify-center w-full h-screen pt-32 md:pt-40 bg-sky-900"
          >
            <ul className="space-y-10 text-center text-white">
              {navLinks.map((navLink) => (
                <motion.li
                  key={navLink.name}
                  variants={drawerAnimationVariants}
                  initial="initial"
                  animate="animate"
                  custom={navLink.index}
                  className="text-xl font-semibold md:text-3xl"
                >
                  {navLink.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
