import { useEffect } from "react";

export const useBodyHeight = () => {
  useEffect(() => {
    document.body.style.height = "auto";

    return () => (document.body.style.height = "auto");
  }, []);
};
