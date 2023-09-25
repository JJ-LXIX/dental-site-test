import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Copyright,
} from "lucide-react";
import Link from "next/link";

type Props = {};

const logos = [
  { name: "facebook", component: <Facebook /> },
  { name: "instagram", component: <Instagram /> },
  { name: "linkedin", component: <Linkedin /> },
  { name: "twitter", component: <Twitter /> },
];

export default function FooterSection({}: Props) {
  return (
    <footer className="min-h-screen w-full bg-[#141414] md:min-h-[60svh] xl:min-h-[40vh] ">
      <div className="mx-auto min-h-screen w-full md:min-h-[40svh] xl:max-w-[65%] xl:py-20">
        {/* LOGO */}
        <div className="mx-10 border-b-2  border-b-zinc-300 py-14">
          <h3 className="text-3xl font-semibold text-white">LOGO</h3>
        </div>

        <div className="xl:flex xl:w-full">
          {/* Address */}
          <div className="xl:w-3/4">
            <div className="flex h-[35svh] w-full flex-col justify-around py-2 pl-10 text-white md:h-[20svh]">
              <h3 className="text-xl font-bold xl:text-2xl xl:font-semibold">
                YOU CAN FIND US
              </h3>
              <h3 className="cursor-pointer text-xl  text-yellow-400 xl:text-2xl">
                email@gmail.com
              </h3>
              <h3 className="text-xl text-yellow-400  xl:text-2xl">
                +1 234 5678 910
              </h3>
              <h3 className="text-xl text-zinc-300 xl:text-2xl">
                1600 Pennsylvania Avenue NW ,Washington, D.C
              </h3>
            </div>

            {/* LOGO */}
            <div className="flex h-[10svh] w-full items-center space-x-2 pl-10 md:h-[5svh]">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-zinc-800 text-xl text-white xl:text-2xl"
                >
                  {logo.component}
                </div>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="mt-10 flex py-2 xl:mt-0 xl:w-2/4">
            <div className="flex h-[25svh] w-1/2 flex-col  pl-10 text-white md:h-[15svh]">
              <h3 className="text-xl font-bold md:text-2xl xl:text-2xl xl:font-semibold">
                PAGES
              </h3>
              <Link
                className="cursor-pointer text-xl text-yellow-400 md:text-2xl xl:text-2xl"
                href="/"
              >
                Home
              </Link>
              <Link
                className="cursor-pointer text-xl text-yellow-400 md:text-2xl xl:text-2xl"
                href="/about"
              >
                About
              </Link>
              <Link
                className="cursor-pointer text-xl text-yellow-400 md:text-2xl"
                href="/services"
              >
                Services
              </Link>
            </div>

            <div className="flex h-[25svh] w-1/2 flex-col pl-10 text-white">
              <h3 className="text-xl font-bold md:text-2xl xl:font-semibold">
                SUPPORT
              </h3>
              <Link
                href="/#contact"
                className="cursor-pointer text-xl text-sky-400 md:text-2xl"
              >
                Contact
              </Link>
              <Link
                href="/#faqSection"
                className="cursor-pointer text-xl text-sky-400 md:text-2xl"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Ending */}
      <div className="flex h-[10svh] w-full bg-zinc-800 xl:mt-10 xl:h-[8vh]">
        <p className="flex w-full items-center justify-center text-zinc-400 md:text-2xl xl:text-lg">
          <Copyright className="h-6 w-6 pr-2 md:h-8 md:w-8" />
          2023 CompanyName. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
