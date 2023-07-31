import * as yup from "yup";

export const SchemaRegister = yup.object().shape({
  name: yup
    .string()
    .required("Este campo é obrigatório!")
    .min(3, "O nome precisa ter pelo 3 caracteres.")
    .max(127, "O nome pode ter no máximo 127 caracteres."),
  email: yup.string().required("E-mail inválido!"),
  password: yup
    .string()
    .required("Este campo é obrigatório!")
    .min(8, "É necessário ter ao menos 8 caracteres!")
    .matches(/(?=.*[A-Z])/, "É necessário ao menos uma letra maiúscula!")
    .matches(/(?=.*[a-z])/, "É necessário ao menos uma letra minúscula!")
    .matches(
      /(?=.*[@#$%^&+=])/,
      "É necessário ao menos um caractere especial!"
    ),
  // passwordConfirm: yup
  //   .string()
  //   .required("Este campo é obrigatório!")
  //   .oneOf([yup.ref("password"), null], "A senha não confere"),
  phone: yup.string().required("Este campo é obrigatório!"),
});
