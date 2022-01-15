import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
interface ProfileDropInputProps {
  accept: string
  name: string
  label: string
  avatar: string
  errors?: string
}

const ProfileDropInput: FC<ProfileDropInputProps> = (props: any) => {
  const { t } = useTranslation()
  const [isAvatar, setisAvatar] = useState(props.avatar)
  const { name, label = name } = props
  const { register, unregister, setValue } = useFormContext()

  const onDrop = useCallback(
    (droppedFiles) => {
      setValue(name, droppedFiles[0], { shouldValidate: true })
      setisAvatar(droppedFiles.map((file: any) => URL.createObjectURL(file) ))
    },
    [setValue, name]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: props.accept,
    maxFiles: 1,
  })
  
  useEffect(() => {
    register(name)
  
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])
  return (
    <div className="form-profile__box-drop">
      <div {...getRootProps()} role="button" aria-label="File Upload" id={name} className="form-profile__drop" style={{ backgroundImage: `url(${isAvatar})` }}>
        <input {...props} {...getInputProps()} type="file" className="form-profile__input-drop"/>

        {isDragActive ? (
            <p className="form-profile__drop-title">{t("image-drop")}</p>
          ) : (
            <p className="form-profile__drop-title">{t("image-drag")}</p>
          )}
          
      </div>
      <span className={`form__error form__error-avatar ${props.errors?.message && 'form__error_type_visible'}`}>
        {t(props.errors?.message || '')}
      </span>
    </div>
  )
}

export default ProfileDropInput
