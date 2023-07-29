import * as yup from "yup";

export const EditContactSchema = yup.object().shape({
   name: yup.string().nullable(),

   email: yup
      .string()
      .matches(
         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
         "Este não é um E-mail válido"
      ).nullable(),

   telephone: yup
      .number()
      .positive("Digite um número de telefone válido")
      .typeError("Digite um número de telefone válido").nullable(),

   address: yup.string().nullable(),
});
