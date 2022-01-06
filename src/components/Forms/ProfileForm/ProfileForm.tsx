import { yupResolver } from "@hookform/resolvers/yup";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDropzone } from "react-dropzone";
import { UserSubmitFormProfile } from "../../../types/formTypes";
import { validationSchemaProfile } from "../../../utils/validationsForms";
import "./ProfileForm.scss";
import { useSelector } from "react-redux";
import OkImage from "../../../images/icons/successfull.svg"
import ErrImage from "../../../images/icons/error.svg"
interface ProfileFormProps {}

const ProfileForm: FC<ProfileFormProps> = ({}) => {
  const user: any = useSelector<any>((state) => state.auth.user);
  const [isAvatar, setIsAvatar] = useState<string>(user.avatar);
  const { t } = useTranslation();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file: any = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );
      setIsAvatar(file[0].preview);
    },
    maxFiles: 1,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitFormProfile>({
    resolver: yupResolver(validationSchemaProfile),
  });
  return (
    <form className="form-profile">
      <h2 className="form-profile__title">Personal Info</h2>
      <div className="form-profile__content">
        <div
          {...getRootProps()}
          className="form-profile__drop"
          style={{ backgroundImage: `url(${isAvatar})` }}
        >
          <input
            className="form-profile__input-drop"
            type="file"
            {...register("file")}
            {...getInputProps()}
          />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>

        <div className="form-profile__box-col">
          <div className="form-profile__box-row">
            <label className="form-profile__label">
              Имя
              <input
                type="text"
                {...register("firstName")}
                defaultValue={user.name}
                className={`form-profile__input ${
                  errors.firstName ? "form-profile__input_theme_error" : ""
                }`}
              />
            </label>
            <label className="form-profile__label">
              Фамилия
              <input
                type="text"
                {...register("lastName")}
                defaultValue={user.surname}
                className={`form-profile__input ${
                  errors.lastName ? "form-profile__input_theme_error" : ""
                }`}
              />
            </label>
          </div>

          <label className="form-profile__label">E-mail</label>
          <div className="form-profile__input form-profile__input_type_email">
            {user.email}
            <span className="form-profile__verify" style={{backgroundImage: `url(${user.isActivated ? OkImage : ErrImage })`}}>
              {user.isActivated ? "Verifed" : "Not Verifed"}
            </span>
          </div>
        </div>
      </div>

      <button type="submit" className="form-profile__button">
        Save Changes
      </button>
    </form>
  );
};

export default ProfileForm;
