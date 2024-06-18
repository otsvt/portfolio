import { useMenuOptions } from "./hooks/use-menu-options";
import { Menu } from "./menu/menu";
import { Game } from "./game/game";

export const TicTacToe = () => {
  const {
    menuOptions,
    isMenuOpen,
    isOptionsComplete,
    isButtonDisable,
    onFormChange,
    onFormSubmit,
    resetForm,
    toggleMenu,
  } = useMenuOptions();

  return (
    <div className="min-h-screen bg-body py-6 font-roboto">
      <main className="flex items-start gap-5 max-w-fit mx-auto">
        <Menu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isButtonDisable={isButtonDisable}
          onFormChange={onFormChange}
          onFormSubmit={onFormSubmit}
          resetForm={resetForm}
        />
        <Game menuOptions={menuOptions} isOptionsComplete={isOptionsComplete} />
      </main>
    </div>
  );
};
