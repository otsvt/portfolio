import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import gsap from "../libs/gsap/gsap.min.js";

export const useGSAPRoute = () => {
  const loaderRef = useRef(null);
  const isAnimating = useRef(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      return new Promise((resolve) => {
        gsap
          .timeline({
            onComplete: () => resolve(),
          })
          .to(loaderRef.current, { x: "0%", duration: 0.5 });
      });
    };

    const handleRouteChangeComplete = () => {
      if (loaderRef.current) {
        gsap.fromTo(
          loaderRef.current,
          { x: "0%" },
          {
            x: "-100%",
            duration: 0.5,
            delay: 0.6,
            onComplete: () => {
              isAnimating.current = false;
            },
          }
        );
      }
    };

    const handleRouteChangeError = () => {
      isAnimating.current = false;
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router]);

  return { loaderRef };
};
