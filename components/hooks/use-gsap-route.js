import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";

export const useGSAPRoute = () => {
  const loaderRef = useRef(null);
  const isAnimating = useRef(false);
  const router = useRouter();

  useEffect(() => {
    const originalPush = router.push;

    router.push = async (...args) => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      await new Promise((resolve) => {
        gsap
          .timeline({
            onComplete: resolve,
          })
          .fromTo(loaderRef.current, { x: "-100%" }, { x: "0%" });
      });

      return originalPush(...args);
    };

    const handleRouteChangeComplete = () => {
      gsap
        .timeline({
          onComplete: () => {
            isAnimating.current = false;
          },
        })
        .fromTo(loaderRef.current, { x: "0%" }, { x: "100%", delay: 0.5 });
    };

    const handleRouteChangeError = () => {
      isAnimating.current = false;
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.push = originalPush;
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router]);

  return { loaderRef };
};
