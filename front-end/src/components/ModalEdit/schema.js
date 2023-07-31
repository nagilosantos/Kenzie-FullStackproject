import * as yup from "yup";

export const Schema = yup.object({
  name: yup.string().required("Digite o nome"),
  email: yup.string().required("Digite o email"),
});
