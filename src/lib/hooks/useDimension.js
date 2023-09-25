import { useState, useEffect } from "react";

const useDimension = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const updateDimension = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsSmallScreen(false);
    } else setIsSmallScreen(true);
  }, []);

  useEffect(() => {
    updateDimension();
    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);
  return { dimension, isMobile, isSmallScreen };
};

export default useDimension;
