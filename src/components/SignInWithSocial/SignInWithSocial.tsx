import React from "react";
import './SignInWithSocial.scss'
import { useTranslation } from "react-i18next";
import google from "../../images/icons/google.svg";
interface SignInWithSocialProps {}

const SignInWithSocial = () => {
  const { t } = useTranslation()
  return (
    <div className="signin-social">
      <button className="signin-social__button" style={{ backgroundImage: `url(${google})` }} onClick={(e) => console.log(e)}>
        {t('sign_in_with_google')}
      </button>
    </div>
  );
};

export default SignInWithSocial;
