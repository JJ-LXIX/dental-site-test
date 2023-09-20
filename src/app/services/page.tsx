"use client";
import React, { useEffect, useState } from "react";
import CustomCursor from "../../../components/CustomCursor/CustomCursor";

type Props = {};

export default function page({}: Props) {
  // const [isMobile, setIsMobile] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  // useEffect(() => {
  //   if (window.innerWidth > 768) {
  //     setIsMobile(false);
  //   }
  // }, []);

  useEffect(() => {
    if (window.innerWidth > 1280) {
      setIsSmallScreen(false);
    } else setIsSmallScreen(true);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen w-full bg-white">Service Page</div>
      {isSmallScreen ? null : <CustomCursor mousePosition={mousePosition} />}
    </>
  );
}
