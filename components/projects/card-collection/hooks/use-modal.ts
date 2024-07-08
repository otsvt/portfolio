import { useState } from "react";

interface IModalReturn {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModal = (): IModalReturn => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return { isModalOpen, openModal, closeModal };
};
