import { useEffect } from "react";

export const useCustomScroll = (className) => {
  useEffect(() => {
    document.body.classList.add(className);

    return () => document.body.classList.remove(className);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
