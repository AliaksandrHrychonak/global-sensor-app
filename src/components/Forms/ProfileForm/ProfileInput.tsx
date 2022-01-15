import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export interface IInputProps {
  name: string,
  label: string,
  defValue?: string,
  errors: any,
}

const ProfileInput: FC<IInputProps> = ({name, label, defValue, errors}) => {
  const { t } = useTranslation()
  const { register } = useFormContext()

  return (
    <label className="form-profile__label">
      {t(label)}
      <input
        type="text"
        {...register(`${name}`)}
        defaultValue={`${defValue}`}
        className={`form-profile__input ${errors ? 'form-profile__input_theme_error' : ''}`}
      />
      <span className={`form__error ${errors?.message && 'form__error_type_visible'}`}>
      {t(errors?.message || '')}
      </span>
    </label>

  )
}

export default ProfileInput
