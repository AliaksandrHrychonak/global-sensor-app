import * as React from "react";
import "./NavBar.scss"
import { NavLink } from "react-router-dom";
import { IRoutes } from "../../types";

interface INavBarProps {
  routes: Array<IRoutes>;
  rowLink: boolean;
}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return (
    <nav className="navigation">
      <ul
        className={`navigation__list ${
          props.rowLink
            ? "navigation__list_type_row"
            : "navigation__list_type_col"
        }`}
      >
        {props.routes.map((link) => (
          <li className="navigation__list_element" key={link.component}>
            <NavLink
              to={link.path}
              className={`navigation__link ${
                props.rowLink
                  ? "navigation__link_type_row"
                  : "navigation__link_type_col"
              }`}
              activeClassName="navigation__link_type_active"
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
