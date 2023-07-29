import * as yup from "yup";

export const CreateSchema = yup.object().shape({
   name: yup.string().required("Nome obrigatorio"),

   password: yup
      .string()
      .min(8, "A senha deve conter mais de 8 digitos")
      .required("Senha obrigatoria"),

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
   .positive("Digite um número de telefone válido")
   .typeError("Digite um número de telefone válido").required("Telefone obrigatorio"),

});
