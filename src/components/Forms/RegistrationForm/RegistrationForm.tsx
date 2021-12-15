import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaRegistration } from "../../../utils/validationsForms";
import { connect, useDispatch } from "react-redux";
import { registration } from "../../../store/actions/authActions";
import { Link } from "react-router-dom";

interface RegistrationFormProps {
  dispatch: any
}

const RegistrationForm: FC<RegistrationFormProps> = () => {
  const dispatch = useDispatch<any>();

  type UserSubmitForm = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
  };

  const { register, handleSubmit, formState: { errors } } = useForm<UserSubmitForm>({ resolver: yupResolver(validationSchemaRegistration) });

  const onSubmit = (data: UserSubmitForm) => {
    dispatch(registration(data.email, data.password))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label className="form__label">firstName</label>
      <input
        type="text"
        {...register("firstName")}
        className={`form__input ${
          errors.firstName ? "form__input_theme_error" : ""
        }`}
      />
      <span
        className={`form__error ${
          errors.firstName?.message && "form__error_type_visible"
        }`}
      >
        {errors.firstName?.message}
      </span>

      <label className="form__label">lastName</label>
      <input
        type="text"
        {...register("lastName")}
        className={`form__input ${
          errors.lastName ? "form__input_theme_error" : ""
        }`}
      />
      <span
        className={`form__error ${
          errors.lastName?.message && "form__error_type_visible"
        }`}
      >
        {errors.lastName?.message}
      </span>

      <label className="form__label">Email</label>
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
        className={`form__error ${
          errors.password?.message && "form__error_type_visible"
        }`}
      >
        {errors.password?.message}
      </span>

      <label className="form__label">Confirm Password</label>
      <input
        type="password"
        {...register("confirmPassword")}
        className={`form__input ${
          errors.confirmPassword ? "form__input_theme_error" : ""
        }`}
      />
      <span
        className={`form__error ${
          errors.confirmPassword?.message && "form__error_type_visible"
        }`}
      >
        {errors.confirmPassword?.message}
      </span>

      <div className="form-group form-check">
        <input
          type="checkbox"
          {...register("acceptTerms")}
          className={`form-check-input ${
            errors.acceptTerms ? "form__input_theme_error" : ""
          }`}
        />
        <label className="form__label" htmlFor="acceptTerms">
          I have read and agree to the Terms
        </label>
        <span
          className={`form__error ${
            errors.acceptTerms?.message && "form__error_type_visible"
          }`}
        >
          {errors.acceptTerms?.message}
        </span>
      </div>

      <button type="submit" className="form__button form__button_type_active">
        Register
      </button>
      <Link to="/sign-in" className="form__link">
        <p className="form__subtitle">
          Уже зарегистрированы?
          <span className="form__span">Войти</span>
        </p>
      </Link>
    </form>
  );
};


export default connect()(RegistrationForm);


