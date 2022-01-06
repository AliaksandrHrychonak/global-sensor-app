import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import accountUserIcon from "../../../images/icons/account-user.svg";
import "./SignInButton.scss";

interface SignInButtonProps {
  isMobile: boolean;
  toggleMenu: any
}

const SignInButton: FC<SignInButtonProps> = ({ isMobile, toggleMenu }) => {
  const {t} = useTranslation()
  return (
    <Link to="/sign-in" className="account-bar__link-signin">
      <button
        className={`account-bar__button-signin ${ isMobile ? "account-bar__button-signin_theme_mobile" : "account-bar__button-signin_theme_default" }`}
        style={{ backgroundImage: `url(${accountUserIcon})` }}
        onClick={isMobile ? toggleMenu : undefined}
      >
        {t("signin")}
      </button>
    </Link>
  );
};

export default SignInButton;
