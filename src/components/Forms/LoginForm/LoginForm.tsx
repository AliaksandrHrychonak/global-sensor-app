import React, { FC } from "react";
import '../Forms.scss'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { connect, useDispatch } from "react-redux";
import { login } from "../../../store/actions/authActions";
import { validationSchemaLogin } from "../../../utils/validationsForms";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {
  const dispatch = useDispatch<any>();

  type UserSubmitForm = {
    email: string;
    password: string;
  };

  const { register, handleSubmit, formState: { errors } } = useForm<UserSubmitForm>({ resolver: yupResolver(validationSchemaLogin) });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(data);
    dispatch(login(data.email, data.password))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">

    <label className="form__label">Email</label>
    <input
      type="text"
      {...register("email")}
      className={`form__input ${
        errors.email ? "form__input_theme_error" : ""
      }`}
    />
    <span className={`form__error ${ errors.email?.message && "form__error_type_visible"}`}>
      {errors.email?.message}
    </span>

    <label className="form__label">Password</label>
    <input
      type="password"
      {...register("password")}
      className={`form__input ${
        errors.password ? "form__input_theme_error" : ""
      }`}
    />
    <span
      className={`form__error ${ errors.password?.message && "form__error_type_visible"}`}>
      {errors.password?.message}
    </span>

    <button type="submit" className="form__button form__button_type_active form__button_type_login">
      Login
    </button>
    <Link to="/sign-up" className="form__link">
      <p className="form__subtitle">
        Ещё не зарегистрированны?
        <span className="form__span">Создать аккаунт</span>
      </p>
    </Link>
  </form>
  );
};

export default connect()(LoginForm);
