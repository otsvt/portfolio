import { useState, useEffect } from "react";

export const usePageLoader = () => {
  const [isPageLoad, setIsPageLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoad(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  return { isPageLoad };
};
