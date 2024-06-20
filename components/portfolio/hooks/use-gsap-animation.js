import { useRef, useEffect } from "react";
import gsap from "../../libs/gsap/gsap.min.js";
import ScrollSmoother from "../../libs/gsap/ScrollSmoother.min.js";
import ScrollTrigger from "../../libs/gsap/ScrollTrigger.min.js";

export const useGSAP = (isLoading) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const heroSectionRef = useRef(null);
  const iconsLeftRef = useRef([]);
  const iconsRightRef = useRef([]);
  const smoothScrollInstanceRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (ScrollTrigger.isTouch !== 1) {
      smoothScrollInstanceRef.current = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5,
        effects: true,
      });

      gsap.fromTo(
        heroSectionRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "center",
            end: "1200",
            scrub: true,
          },
        }
      );

      iconsLeftRef.current.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -500 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: "-850",
              end: "-100",
              scrub: true,
            },
          }
        );
      });

      iconsRightRef.current.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 450 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: "-650",
              end: "-50",
              scrub: true,
            },
          }
        );
      });
    }

    return () => {
      if (gsap) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        gsap.killTweensOf([heroSectionRef.current, ...iconsLeftRef.current, ...iconsRightRef.current]);
      }
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
      if (smoothScrollInstanceRef.current) {
        smoothScrollInstanceRef.current.kill();
      }
    };
  }, [isLoading]);

  return { wrapperRef, contentRef, heroSectionRef, iconsLeftRef, iconsRightRef };
};
