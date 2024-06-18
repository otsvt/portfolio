import { useEffect, useRef } from "react";
import { gsap } from "../../../libs/gsap/gsap.min-2";
import draggable from "../../../libs/gsap/Draggable.min.js";

export const useGSAP = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    let draggableInstance;

    gsap.registerPlugin(draggable);

    setTimeout(() => {
      if (window.matchMedia("(min-width: 991px)").matches) {
        draggableInstance = draggable.create(galleryRef.current, {
          bounds: "body",
          inertia: true,
          allowContextMenu: true,
        });
      }
    }, 1000);

    return () => {
      if (draggableInstance) draggableInstance.forEach((instance) => instance.kill());
    };
  }, []);

  return { galleryRef };
};
