import * as yup from "yup";

export const SchemaCreateContact = yup.object({
  name: yup.string().required("Digite o nome"),
  email: yup.string().required("Digite o email"),
  phone: yup.string().required("Digite o telefone"),
});
