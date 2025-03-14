import { FormData, FormErrors } from "../types";

export const validateLoginForm = (
  email: string,
  password: string
): FormErrors => {
  const errors: FormErrors = {};

  if (!email) {
    errors.email = "E-mail é obrigatório";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "E-mail inválido";
  }

  if (!password) {
    errors.password = "Senha é obrigatória";
  }

  return errors;
};
