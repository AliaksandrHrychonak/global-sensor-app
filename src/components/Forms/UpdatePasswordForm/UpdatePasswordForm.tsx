import { yupResolver } from '@hookform/resolvers/yup'
import React, { FC } from 'react'
import './UpdatePasswordForm.scss'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { UserSubmitFormUpdatePassword } from '../../../types/formTypes'
import { validationSchemaUpdatePassword } from '../../../utils/validationsForms'

interface UpdatePasswordFormProps {
  onUpdateUserPas: any
}

const UpdatePasswordForm: FC<UpdatePasswordFormProps> = ({onUpdateUserPas}) => {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitFormUpdatePassword>({
    resolver: yupResolver(validationSchemaUpdatePassword),
  })

  return (
    <form className="form-password" onSubmit={handleSubmit(onUpdateUserPas)}>
      <h2 className="form-password__title">Security</h2>
      <label className="form-password__label">
        {t('oldPassword')}
        <input
          type="password"
          {...register('oldPassword')}
          className={`form-password__input ${errors.oldPassword ? 'form-password__input_theme_error' : ''}`}
        />
        <span className={`form-password__error ${errors.oldPassword?.message && 'form-password__error_type_visible'}`}>
          {t(errors.oldPassword?.message || '')}
        </span>
      </label>
      

      <label className="form-password__label">
        {t('newPassword')}
        <input
          type="password"
          {...register('newPassword')}
          className={`form-password__input ${errors.newPassword ? 'form-password__input_theme_error' : ''}`}
        />
        <span className={`form-password__error ${errors.newPassword?.message && 'form-password__error_type_visible'}`}>
          {t(errors.newPassword?.message || '')}
        </span>
      </label>
      

      <label className="form-password__label">
        {t('confirm-password')}
        <input
        type="password"
        {...register('verifyPassword')}
        className={`form-password__input ${errors.verifyPassword ? 'form-password__input_theme_error' : ''}`}
        />
        <span
          className={`form-password__error ${errors.verifyPassword?.message && 'form-password__error_type_visible'}`}
        >
          {t(errors.verifyPassword?.message || '')}
        </span>
      </label>
      

      <button type="submit" className="form-password__button">
        Save
      </button>
    </form>
  )
}

export default UpdatePasswordForm
