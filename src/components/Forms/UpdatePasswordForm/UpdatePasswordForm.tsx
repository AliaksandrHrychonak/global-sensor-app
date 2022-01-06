import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react'
import './UpdatePasswordForm.scss'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { UserSubmitFormUpdatePassword } from '../../../types/formTypes';
import { validationSchemaUpdatePassword } from '../../../utils/validationsForms';

interface UpdatePasswordFormProps {
  
}

const UpdatePasswordForm: FC<UpdatePasswordFormProps> = ({}) => {

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitFormUpdatePassword>({
    resolver: yupResolver(validationSchemaUpdatePassword),
  });


  return (
    <form className="form-password">
      <h2 className='form-password__title'>Security</h2>
      <label className="form-password__label">{t("oldPassword")}</label>
      <input
        type="password"
        {...register("oldPassword")}
        className={`form-password__input ${
          errors.oldPassword ? "form-password__input_theme_error" : ""
        }`}
      />
      <span
        className={`form-password__error ${
          errors.oldPassword?.message && "form-password__error_type_visible"
        }`}
      >
        {t(errors.oldPassword?.message || "")}
      </span>

      <label className="form-password__label">{t("newPassword")}</label>
      <input
        type="password"
        {...register("newPassword")}
        className={`form-password__input ${
          errors.newPassword ? "form-password__input_theme_error" : ""
        }`}
      />
      <span
        className={`form-password__error ${
          errors.newPassword?.message && "form-password__error_type_visible"
        }`}
      >
        {t(errors.newPassword?.message || "")}
      </span>

      <label className="form-password__label">{t("confirm-password")}</label>
      <input
        type="password"
        {...register("confirmPassword")}
        className={`form-password__input ${
          errors.confirmPassword ? "form-password__input_theme_error" : ""
        }`}
      />
      <span
        className={`form-password__error ${
          errors.confirmPassword?.message && "form-password__error_type_visible"
        }`}
      >
        {t(errors.confirmPassword?.message || "")}
      </span>

      <button type="submit" className="form-password__button">Save</button>
    </form>
  )
}

export default UpdatePasswordForm
