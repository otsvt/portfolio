import { useState, useEffect } from "react";

export const useMenuOptions = () => {
  const [menuFakeOptions, setMenuFakeOptions] = useState({
    numberOfPeople: null,
    time: null,
    sequence: null,
  });
  const [menuOptions, setMenuOptions] = useState(null);
  const [isOptionsComplete, setIsOptionsComplete] = useState(false);
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    if (isOptionsComplete) setIsMenuOpen(false);
  }, [isOptionsComplete]);

  useEffect(() => {
    setIsButtonDisable(!Object.values(menuFakeOptions).every((option) => option !== null));
  }, [menuFakeOptions]);

  const onFormChange = (e) => {
    setMenuFakeOptions((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    setMenuOptions(menuFakeOptions);
    setIsOptionsComplete(true);
  };

  const resetForm = () => {
    setMenuFakeOptions({
      numberOfPeople: null,
      time: null,
      sequence: null,
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return {
    menuOptions,
    isMenuOpen,
    isOptionsComplete,
    isButtonDisable,
    onFormChange,
    onFormSubmit,
    resetForm,
    toggleMenu,
  };
};
