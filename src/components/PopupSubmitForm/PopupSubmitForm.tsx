import React, { FC } from 'react'
import './PopupSubmitForm.scss'
import OkImage from "../../images/icons/successfull.svg"
import ErrImage from "../../images/icons/error.svg"
import { useTranslation } from 'react-i18next'
interface PopupSubmitFormProps {
  status: boolean,
}

const PopupSubmitForm: FC<PopupSubmitFormProps> = ({ status }) => {
  const {t} = useTranslation()
  return (
    <div className='popup-feedback'>
      <h2 className='popup-feedback__title'>{status ? t("contact_us_fail") : t("contact_us_success") }</h2>
      <img src={(!status && OkImage )|| ErrImage} alt="status" className='popup-feedback__image'/>
      {!status && <p className='popup-feedback__subtitle'>{t("contact_us_message")}</p>}
    </div>
  )
}

export default PopupSubmitForm
