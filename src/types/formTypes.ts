export type UserSubmitFormRegister = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};
export type UserSubmitFormProfile = {
  file: any;
  firstName: string;
  lastName: string;
};

export type UserSubmitFormLogin = {
  email: string;
  password: string;
};

export type UserSubmitFormUpdatePassword = {
  oldPassword: string,
  newPassword: string;
  verifyPassword: string;
};

export type UserSubmitForm = {
  fullname: string;
  email: string;
  message: string;
};