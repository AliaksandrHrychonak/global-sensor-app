import React, { FC } from "react";
import "./MenuButton.scss";
interface MenuButtonProps {
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void;
}

export const MenuButton: FC<MenuButtonProps> = ({ toggleMenu }) => {
  return (
    <button className="acccount-bar__burger-button" onClick={toggleMenu}>
      <span className="acccount-bar__burger-button_line" />
    </button>
  );
};
