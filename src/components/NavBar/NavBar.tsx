import * as React from "react";
import "./NavBar.scss"
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


export interface INavBarProps {
  rowLink: boolean;
  isMobile: boolean;
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void
}
const NavBar: React.FunctionComponent<INavBarProps> = ({rowLink, isMobile, toggleMenu}) => {
  const {t} = useTranslation()

  const links = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "PM2100",
      path: "/pm2100"
    },
    {
      name: "PM2101",
      path: "/pm2101"
    },
    {
      name: "PM2102",
      path: "/pm2102"
    },
    {
      name: "Contact",
      path: "/contact"
    },
  ]

  const navLinkClassName = ({ isActive }: boolean | any) => isActive ? 
   `navigation__link navigation__link_type_active ${ rowLink ? "navigation__link_type_row" : "navigation__link_type_col"}` 
   :
   `navigation__link ${ rowLink ? "navigation__link_type_row" : "navigation__link_type_col"}`

  return (
    <nav className="navigation">
      <ul
        className={`navigation__list ${
          rowLink
            ? "navigation__list_type_row"
            : "navigation__list_type_col"
        }`}
      >
        {links.map((link, index) => (
          <li className={`navigation__list_element ${ rowLink ? "navigation__list_element_type_row" : "navigation__list_element_type_col"}`} key={index}>
            <NavLink
              to={link.path}
              className={navLinkClassName}
              // activeClassName="navigation__link_type_active"
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
