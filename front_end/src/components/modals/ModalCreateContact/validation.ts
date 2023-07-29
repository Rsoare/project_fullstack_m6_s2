import * as yup from "yup";

export const createContactSchema = yup.object().shape({
   name: yup.string().required("Nome obrigatorio"),

   email: yup
      .string()
      .matches(/[a-z0-9.]+/, "Esse não e um E-mail valido ")
      .matches(/@/, "Esse não e um E-mail valido ")
      .matches(/[a-z0-9]+/, "Esse não e um E-mail valido ")
      .matches(/\./, "Esse não e um E-mail valido ")
      .matches(/[a-z]+/, "Esse não e um E-mail valido ")
      .required(),

   telephone: yup
      .number()
      .positive()
      .required("Telefone obrigatorio")
      .typeError("Digite um Telefone valido"),

   address: yup
      .string()
      .required("Endereço obrigatorio")
      
});
