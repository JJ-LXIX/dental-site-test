"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.css";
import { Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full transition ease transform duration-300 bg-white `;

  return (
    <div className="z-50 flex w-full items-center justify-center">
      <div className="navbar fixed top-5 z-50 flex h-[4rem] w-[90%] items-center justify-between rounded-full border-2  px-6 text-white transition-all duration-300 md:h-[5rem] md:w-[60%] lg:h-[5.5rem] 2xl:w-[60%] 4xl:w-[50%]">
        <Link
          href="/"
          onClick={() => {
            if (isOpen) {
              setIsOpen(!isOpen);
            }
          }}
        >
          <div className="text-xl font-bold">LOGO</div>
        </Link>

        <div className="hidden items-center justify-around lg:flex lg:w-[50%] xl:w-[40%]">
          <Link
            href="/about"
            className="text-xl font-bold  transition-all duration-300 hover:text-purple-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-xl font-bold  transition-all duration-300 hover:text-purple-300"
          >
            Services
          </Link>
          <a href="/#contact" className="text-xl">
            <button className="flex h-14 w-full items-center justify-center rounded border-2 border-white p-4 transition duration-300 hover:scale-105 hover:bg-black/70 active:scale-95">
              Contact Us
            </button>
          </a>
        </div>

        <a
          href="tel: 7899896869"
          className="flex w-28 items-center justify-around rounded border-2 border-white px-2 py-[.5rem] font-semibold transition-all duration-300 active:scale-95 lg:hidden"
        >
          <Phone />
          Call Us
        </a>

        <button
          aria-label="navigation dropdown icon"
          className="group flex h-12 w-12 flex-col items-center justify-center rounded lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "translate-y-3 rotate-45" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "-translate-y-3 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile slide down nav */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="navbar__slidedown fixed inset-0 z-40 flex flex-col items-center space-y-10 bg-black  pt-44"
          >
            <Link
              href="/"
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl font-bold  text-white  transition-all duration-300 hover:text-purple-600"
            >
              <h2>- Home -</h2>
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl font-bold  text-white  transition-all duration-300 hover:text-purple-600"
            >
              <h2>- About -</h2>
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl font-bold  text-white  transition-all duration-300 hover:text-purple-600"
            >
              <h2>- Services -</h2>
            </Link>
            <a
              href="/#contact"
              className="text-xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <button className="h-14 w-full rounded  border-2 border-white  px-4 text-white transition duration-300 hover:scale-105 hover:bg-black/70 active:scale-95">
                Contact Us
              </button>
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
