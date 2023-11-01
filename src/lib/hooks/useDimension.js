import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

const useDimension = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const updateDimension = () => {
    const { innerWidth, innerHeight } = window;
    if (innerWidth >= 768) {
      setIsMobile(false);
    }
    if (innerWidth >= 1024) {
      setIsSmallScreen(false);
    } else setIsSmallScreen(true);
    setDimension({ width: innerWidth, height: innerHeight });
  };

  const throttledUpdateDimension = throttle(updateDimension, 500);

  useEffect(() => {
    updateDimension();
    window.addEventListener("resize", throttledUpdateDimension);
    return () => {
      window.removeEventListener("resize", throttledUpdateDimension);
    };
  }, []);
  return { dimension, isMobile, isSmallScreen };
};

export default useDimension;
