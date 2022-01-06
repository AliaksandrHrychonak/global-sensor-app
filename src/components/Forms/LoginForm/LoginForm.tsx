import React, { FC } from "react";
import "../Forms.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { connect } from "react-redux";
import { validationSchemaLogin } from "../../../utils/validationsForms";
import { useTranslation } from "react-i18next";
import { UserSubmitFormLogin } from "../../../types/formTypes";

interface LoginFormProps {
  onSubmit: any
}

const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const {t} = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitFormLogin>({ resolver: yupResolver(validationSchemaLogin) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label className="form__label">{t("email")}</label>
      <input
        type="text"
        {...register("email")}
        className={`form__input ${
          errors.email ? "form__input_theme_error" : ""
        }`}
      />
      <span
        className={`form__error ${
          errors.email?.message && "form__error_type_visible"
        }`}
      >
        {t(errors.email?.message || '' )}
      </span>

      <label className="form__label">{t("password")}</label>
      <input
        type="password"
        {...register("password")}
        className={`form__input ${
          errors.password ? "form__input_theme_error" : ""
        }`}
      />
      <span
        className={`form__error ${
          errors.password?.message && "form__error_type_visible"
        }`}
      >
        {t(errors.password?.message || '')}
      </span>

      <button
        type="submit"
        className="form__button form__button_type_active form__button_type_login"
      >
        {t("signin")}
      </button>
      <Link to="/sign-up" className="form__link">
        <p className="form__subtitle">
          {t("not_register")}
          <span className="form__span">{t("registration-title")}</span>
        </p>
      </Link>
    </form>
  );
};

export default connect()(LoginForm);
