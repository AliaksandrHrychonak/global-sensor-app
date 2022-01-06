import * as Yup from "yup";

export const validationSchemaRegistration = Yup.object().shape({
  firstName: Yup.string().required("error_name_reg")
    .min(2, "error_min_two")
    .max(20, "error_max_twenty"),
  lastName: Yup.string()
    .required("error_surname_reg")
    .min(6, "error_min_six")
    .max(20, "error_max_twenty"),
  email: Yup.string().required("error_email_reg").email("error_email_valid"),
  password: Yup.string()
    .required("error_pas_red")
    .min(6, "error_min_six")
    .max(40, "error_max_fourty"),
  confirmPassword: Yup.string()
    .required("error_сonfirm_reg")
    .oneOf([Yup.ref("password"), null], "error_confirm_pas_valid"),
  acceptTerms: Yup.bool().oneOf([true], "error_terms_reg"),
});

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().required("error_email_reg").email("error_email_valid"),
  password: Yup.string()
    .required("error_pas_red")
    .min(6, "error_min_six")
    .max(40, "error_max_fourty"),
});

export const validationSchemaContact = Yup.object().shape({
  fullname: Yup.string().required("error_fullname_reg")
    .min(2, "error_min_two")
    .max(40, "error_max_fourty"),
  email: Yup.string().required("error_email_reg").email("error_email_valid"),
  message: Yup.string()
    .required("error_email_reg")
    .min(6, "error_min_six")
    .max(400, "error_max_fourty"),
});

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];

export const validationSchemaProfile = Yup.object().shape({
  file: Yup.mixed().required("A file is required").test(
    "fileSize",
    "File too large",
    value => value && value.size <= FILE_SIZE
  )
  .test(
    "fileFormat",
    "Unsupported Format",
    value => value && SUPPORTED_FORMATS.includes(value.type)
  ),
  firstName: Yup.string().required("error_name_reg")
    .min(2, "error_min_two")
    .max(20, "error_max_twenty"),
  lastName: Yup.string()
    .required("error_surname_reg")
    .min(6, "error_min_six")
    .max(20, "error_max_twenty"),
  oldPassword:  Yup.string()
    .required("error_pas_red")
    .min(6, "error_min_six")
    .max(40, "error_max_fourty"),
  password: Yup.string()
    .required("error_pas_red")
    .min(6, "error_min_six")
    .max(40, "error_max_fourty"),
  confirmPassword: Yup.string()
    .required("error_сonfirm_reg")
    .oneOf([Yup.ref("password"), null], "error_confirm_pas_valid"),
});

export const validationSchemaUpdatePassword = Yup.object().shape({
  oldPassword:  Yup.string()
    .required("error_pas_red")
    .min(6, "error_min_six")
    .max(40, "error_max_fourty"),
  newPassword: Yup.string()
    .required("error_pas_red")
    .min(6, "error_min_six")
    .max(40, "error_max_fourty"),
  confirmPassword: Yup.string()
    .required("error_сonfirm_reg")
    .oneOf([Yup.ref("password"), null], "error_confirm_pas_valid"),
});