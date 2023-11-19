"use client";
import React, { useEffect, useState } from "react";
import CustomCursor from "../../../components/CustomCursor/CustomCursor";
import useMousePosition from "@/lib/hooks/useMousePosition";

type Props = {};

export default function Page({}: Props) {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 1280) {
      setIsSmallScreen(false);
    } else setIsSmallScreen(true);
  }, []);

  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center bg-white text-2xl">
        Service Page (customized based on your needs)
      </div>
      {isSmallScreen ? null : <CustomCursor />}
    </>
  );
}
