import * as React from "react";
import "./NavBar.scss"
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { links } from "../../utils/routers";

export interface INavBarProps {
  rowLink: boolean;
  isMobile: boolean;
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void
}
const NavBar: React.FunctionComponent<INavBarProps> = ({rowLink, isMobile, toggleMenu}) => {
  const {t} = useTranslation()

  const listClassName = `navigation__list ${ rowLink ? "navigation__list_type_row" : "navigation__list_type_col" }`
  const listElementClassName = `navigation__list_element ${ rowLink ? "navigation__list_element_type_row" : "navigation__list_element_type_col"}`
  const navLinkClassName = ({ isActive }: boolean | any ) => isActive ? 
   `navigation__link ${ rowLink ? "navigation__link_type_active-row navigation__link_type_row" : " navigation__link_type_active-col navigation__link_type_col"}` :
   `navigation__link ${ rowLink ? "navigation__link_type_row" : "navigation__link_type_col"}`

  return (
    <nav className="navigation">
      <ul className={listClassName}>
        {links.map((link, index) => (
          <li className={listElementClassName} key={index}>
            <NavLink
              to={link.path}
              className={navLinkClassName}
              onClick={isMobile ? toggleMenu : undefined} 
            >
              {t(link.name)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
