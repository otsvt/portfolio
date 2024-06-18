import { useState } from "react";

export const useSafety = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onItemClick = (item) => {
    setSelectedItem(item);
    setIsOverlayVisible(true);
  };

  const onCloseClick = () => {
    setIsOverlayVisible(false);
  };

  return { isOverlayVisible, selectedItem, onItemClick, onCloseClick };
};
