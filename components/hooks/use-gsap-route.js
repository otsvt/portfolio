import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";

export const useGSAPRoute = () => {
  const loaderRef = useRef(null);
  const isAnimating = useRef(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      gsap.timeline().fromTo(loaderRef.current, { x: "-100%" }, { x: "0%", duration: 0.5 });
    };

    const handleRouteChangeComplete = () => {
      gsap
        .timeline({
          onComplete: () => (isAnimating.current = false),
        })
        .fromTo(loaderRef.current, { x: "0%" }, { x: "100%", duration: 0.5, delay: 0.8 });
    };

    const handleRouteChangeError = () => (isAnimating.current = false);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.on("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router]);

  return { loaderRef };
};
