import Image from "next/image";
import React from "react";
import { MotionValue, motion } from "framer-motion";
import { Quote } from "lucide-react";

type Props = {
  reviews: { name: string; review: string }[];
  y?: MotionValue<number>;
};

export default function Column({ reviews, y }: Props) {
  return (
    <motion.div
      className="relative flex h-full w-1/4 min-w-[14rem] flex-col gap-[1vw] xl:gap-[2vw] 
      [&:nth-child(1)]:top-[-45%]
      [&:nth-child(2)]:top-[-95%]
      [&:nth-child(3)]:top-[-45%]
      [&:nth-child(4)]:top-[-85%]
      "
      style={{ y }}
    >
      {reviews.map((review, index) => {
        return (
          <div
            key={index}
            className="relative h-full w-full overflow-hidden rounded-lg bg-white"
          >
            <div className="flex h-full w-full flex-col">
              {/* Review Text */}
              <div className="flex h-4/6 w-full items-center p-2 text-center text-2xl xl:px-4 xl:text-3xl">
                "{review.review}"
              </div>
              {/* Image and Name */}
              <div className="flex h-3/6 w-full flex-col items-center justify-center space-y-4 bg-zinc-100 pt-8">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-red-500"></div>
                </div>
                <div className="flex h-full w-full justify-center  text-2xl font-bold ">
                  {review.name}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
