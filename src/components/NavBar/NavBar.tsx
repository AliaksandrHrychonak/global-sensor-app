import * as React from "react";
import "./NavBar.scss"
import { NavLink } from "react-router-dom";
import { IRoutes } from "../../types";

export interface INavBarProps {
  routes: Array<IRoutes>;
  rowLink: boolean;
  isMobile: boolean;
  toggleMenu: () => void
}
const NavBar: React.FunctionComponent<INavBarProps> = ({rowLink, routes, isMobile, toggleMenu}) => {
  return (
    <nav className="navigation">
      <ul
        className={`navigation__list ${
          rowLink
            ? "navigation__list_type_row"
            : "navigation__list_type_col"
        }`}
      >
        {routes.map((link,index) => (
          <li className={`navigation__list_element ${ rowLink ? "navigation__list_element_type_row" : "navigation__list_element_type_col"}`} key={index}>
            <NavLink
              to={link.path}
              className={`navigation__link ${ rowLink ? "navigation__link_type_row" : "navigation__link_type_col"}`}
              activeClassName="navigation__link_type_active"
              onClick={isMobile ? toggleMenu : undefined} 
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
