import { ButtonMenu } from "./layouts/button-menu";
import { Form } from "./layouts/form";
import clsx from "clsx";

export const Menu = ({ isMenuOpen, toggleMenu, isButtonDisable, onFormChange, onFormSubmit, resetForm }) => {
  const menuClasses = clsx(
    "flex flex-col gap-4 bg-window shadow-forWindow rounded-lg transition-all ease-in-out",
    isMenuOpen ? "h-[400px] w-[350px]" : "h-[38px] w-[54px]"
  );

  return (
    <div className={menuClasses}>
      <ButtonMenu toggleMenu={toggleMenu} resetForm={resetForm} />
      <Form
        isVisible={isMenuOpen}
        isButtonDisable={isButtonDisable}
        onFormChange={onFormChange}
        onFormSubmit={onFormSubmit}
        toggleMenu={toggleMenu}
      />
    </div>
  );
};
