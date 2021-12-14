import React, { FC } from "react";
import '../Forms.scss'
import { Link } from "react-router-dom";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {

  return (
    <form className="form" noValidate>
      {/* <label htmlFor="name-signup" className="form__label">
        {t('email')}
      </label>
      <input
        id="email-signup"
        name="email"
        type="email"
        className={`form__input form__input_theme_bold ${ errors.email && "form__input_theme_error" }`}
        required
        onChange={handleChange}
        value={values.email || ""}
      />
      <span
        className={`form__error ${errors.email && "form__error_type_visible"}`}
      >
        {errors.email }
      </span>

      <label htmlFor="password-signup" className="form__label">
        {t('password')}
      </label>
      <input
        required
        minLength={8}
        id="passsword-signup"
        name="password"
        type="password"
        className={`form__input ${
          errors.password && "form__input_theme_error"
        }`}
        value={values.password || ""}
        onChange={handleChange}
      />
      <span
        className={`form__error ${
          errors.password && "form__error_type_visible"
        }`}
      >
        {errors.password}
      </span>

      {!isValid && (
        <span
          className={`form__error ${isValid && "form__error_type_visible"}`}
        >
          Что-то пошло не так...
        </span>
      )}

      <button
        disabled={!isValid}
        className={`form__button ${
          isValid ? "form__button_type_active" : "form__button_type_disabled"
        }`}
      >
        Войти
      </button> */}
      <Link to="/sign-up" className="form__link">
        <p className="form__subtitle">
          Ещё не зарегистрированы?
          <span className="form__span">Регистрация</span>
        </p>
      </Link>
    </form>
  );
};

export default LoginForm;