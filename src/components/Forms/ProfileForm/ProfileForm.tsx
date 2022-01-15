import React, { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { UserSubmitFormProfile } from '../../../types/formTypes'
import { validationSchemaProfile } from '../../../utils/validationsForms'
import './ProfileForm.scss'
import { useSelector } from 'react-redux'
import OkImage from '../../../images/icons/successfull.svg'
import ErrImage from '../../../images/icons/error.svg'
import { yupResolver } from '@hookform/resolvers/yup'
import ProfileDropInput from './ProfileDropInput'
import ProfileInput from './ProfileInput'

interface ProfileFormProps {
  onUpdateUser: any
}

const ProfileForm: FC<ProfileFormProps> = ({ onUpdateUser }) => {
  const { t } = useTranslation()
  const user: any = useSelector<any>((state) => state.auth.user)
  const methods = useForm<UserSubmitFormProfile>({
    resolver: yupResolver(validationSchemaProfile),
    mode: 'onBlur',
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onUpdateUser)} className="form-profile">
        <h2 className="form-profile__title">Personal Info</h2>
        <div className="form-profile__content">
          <ProfileDropInput accept="image/png, image/jpg, image/jpeg, image/gif" name="file" label="Avatar" avatar={user.avatar} errors={methods.formState.errors.file}/>
          <div className="form-profile__box-col">
            <div className="form-profile__box-row">
              <ProfileInput
                label="name"
                name="firstName"
                defValue={user.name}
                errors={methods.formState.errors.firstName}
              />
              <ProfileInput
                label="surname"
                name="lastName"
                defValue={user.surname}
                errors={methods.formState.errors.lastName}
              />
            </div>
            <label className="form-profile__label">{t('email')}</label>
            <div className="form-profile__input form-profile__input_type_email">
              {user.email}
              <span
                className="form-profile__verify"
                style={{ backgroundImage: `url(${user.isActivated ? OkImage : ErrImage})` }}
              >
                {t(user.isActivated ? 'email-verified' : 'email-not-verified')}
              </span>
            </div>
            <button type="submit" className="form-profile__button">Submit</button>
          </div>
        </div>

        
      </form>
    </FormProvider>
  )
}
export default ProfileForm
