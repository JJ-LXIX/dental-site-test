"use client";
import React, { useEffect, useState } from "react";
import CustomCursor from "../../../components/CustomCursor/CustomCursor";
import useMousePosition from "@/lib/hooks/useMousePosition";
import useDimension from "@/lib/hooks/useDimension";

type Props = {};

export default function Page({}: Props) {
  const { isMobile, isSmallScreen } = useDimension();

  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center bg-white text-2xl">
        About page (customized based on your needs)
      </div>
      {isSmallScreen ? null : <CustomCursor />}
    </>
  );
}
