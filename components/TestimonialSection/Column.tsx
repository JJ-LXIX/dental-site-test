import Image from "next/image";
import React from "react";
import { MotionValue, motion } from "framer-motion";

type Props = { images: number[]; y?: MotionValue<number> };

export default function Column({ images, y }: Props) {
  return (
    <motion.div
      className="relative flex h-full w-1/4 min-w-[15rem] flex-col gap-[2vw] 
      [&:nth-child(1)]:top-[-45%]
      [&:nth-child(2)]:top-[-95%]
      [&:nth-child(3)]:top-[-45%]
      [&:nth-child(4)]:top-[-85%]
      "
      style={{ y }}
    >
      {images.map((e, index) => {
        return (
          <div
            key={index}
            className="relative h-full w-full overflow-hidden rounded-lg bg-white"
          >
            <Image
              src="/images/Healthcare_worker.png"
              fill
              alt="image"
              style={{ objectFit: "cover" }}
            />
          </div>
        );
      })}
    </motion.div>
  );
}
