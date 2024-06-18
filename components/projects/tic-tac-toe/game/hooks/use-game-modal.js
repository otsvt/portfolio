import { useEffect, useState } from "react";

export const useGameModal = (winnerPlayer, isDraw) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!!winnerPlayer || !!isDraw) setIsModalOpen(true);

    return () => setIsModalOpen(false);
  }, [winnerPlayer, isDraw]);

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  return { isModalOpen, onModalClose, onModalOpen };
};
