import { useEffect, useRef } from "react";

export const useFrameScroll = () => {
  const frameRefs = useRef([]);

  useEffect(() => {
    let zSpacing = -2400;
    let lastPos = zSpacing / 8;
    let zVals = [];

    const handleScroll = () => {
      let top = document.documentElement.scrollTop,
        delta = lastPos - top;

      lastPos = top;

      frameRefs.current.forEach((frame, i) => {
        if (frame) {
          zVals.push(i * zSpacing + zSpacing);
          zVals[i] += delta * -5.5;
          const transform = `translateZ(${zVals[i]}px)`;
          const opacity = zVals[i] < Math.abs(zSpacing) / 4 ? 1 : 0;
          frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 1);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { frameRefs };
};
