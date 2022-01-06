import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { contactFeedback } from "../../../store/actions/userActions";

import { validationSchemaContact } from "../../../utils/validationsForms";
import PopupSubmitForm from "../../PopupSubmitForm/PopupSubmitForm";
import Preloader from "../../Preloader/Preloader";
import "./ContactForm.scss";
interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = () => {
  const formState: any = useSelector<any>(
    (state) => state.userService.feedbackForm
  );

  const dispatch = useDispatch<any>();
  const { t } = useTranslation();
  type UserSubmitForm = {
    fullname: string;
    email: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchemaContact),
  });

  const onSubmit = (data: UserSubmitForm) => {
    dispatch(contactFeedback(data.fullname, data.email, data.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form form_type_contact">
      {formState.isLoading ? (
        <Preloader />
      ) : (
        formState.isSubmit ? <PopupSubmitForm status={formState.isSubmitError} /> :
        <>
          <h2 className="form__title">{t("contact_us")}</h2>
          <label className="form__label form__label_type_contact">
            {t("fullname")}
          </label>
          <input
            type="text"
            {...register("fullname")}
            className={`form__input form__input_theme_white ${
              errors.fullname ? "form__input_theme_error" : ""
            }`}
          />
          <span
            className={`form__error ${
              errors.fullname?.message && "form__error_type_visible"
            }`}
          >
            {t(errors.fullname?.message || "")}
          </span>
          <label className="form__label form__label_type_contact">
            {t("email")}
          </label>
          <input
            type="text"
            {...register("email")}
            className={`form__input form__input_theme_white ${
              errors.email ? "form__input_theme_error" : ""
            }`}
          />
          <span
            className={`form__error ${
              errors.email?.message && "form__error_type_visible"
            }`}
          >
            {t(errors.email?.message || "")}
          </span>
          <label className="form__label form__label_type_contact">
            {t("message")}
          </label>
          <textarea
            {...register("message")}
            className={`form__textarea ${
              errors.message ? "form__textarea_theme_error" : ""
            }`}
          />
          <span
            className={`form__error ${
              errors.message?.message && "form__error_type_visible"
            }`}
          >
            {t(errors.message?.message || "")}
          </span>
          <button
            type="submit"
            className="form__button form__button_type_contact"
          >
            {t("submit")}
          </button>
        </>
      )}
    </form>
  );
};

export default ContactForm;
