import React, { useRef } from "react";
import Column from "./Column";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import useDimension from "@/lib/hooks/useDimension";

type Props = {};
const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function TestimonialSection({}: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const { dimension } = useDimension();

  const y = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3.3]);
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.height * 1.25],
  );
  const y4 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3.3]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <div
      className="flex h-[175vh] gap-[2vw] overflow-hidden bg-[#141414] px-10 pb-20"
      ref={container}
    >
      <Column images={[images[0], images[1], images[2]]} y={y} />
      <Column images={[images[3], images[4], images[5]]} y={y2} />
      <Column images={[images[6], images[7], images[8]]} y={y3} />
      <Column images={[images[9], images[10], images[11]]} y={y4} />
    </div>
  );
}
