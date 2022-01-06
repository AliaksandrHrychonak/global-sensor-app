import React, { FC } from "react";
import './SignInWithSocial.scss'
import { useTranslation } from "react-i18next";
import google from "../../images/icons/google.svg";

interface SignInWithSocialProps {
  onAccess: any
}

const SignInWithSocial: FC<SignInWithSocialProps> = ({onAccess}) => {
  const { t } = useTranslation()
  return (
    <a className="signin-social" href="https://api-global-sensor.monster/auth/google" target="_blank">
      <button className="signin-social__button" style={{ backgroundImage: `url(${google})` }} onClick={onAccess}>
        {t('sign_in_with_google')}
      </button>
    </a>
  );
};

export default SignInWithSocial;
