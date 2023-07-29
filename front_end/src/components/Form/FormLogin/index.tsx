import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "../Inputs";
import { loginSchema } from "./validation";
import { useContext, useState } from "react";
import { LoginContext } from "../../../contexts/login";
import { FormStyled } from "./styled";
import { ButtonLogin } from "../../../styles/buttons";
import { iUserLogin } from "../../../contexts/login/@types";
import ModalCreateClient from "../../modals/ModalCreateClient";

const FormLogin = () => {
   const { userLogin } = useContext(LoginContext);

   const [opemModal, setOpemModal] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<iUserLogin>({ resolver: yupResolver(loginSchema) });

   const submit: SubmitHandler<iUserLogin> = (data) => {
      userLogin(data);
   };

   return (
      <>
         <FormStyled onSubmit={handleSubmit(submit)}>
            <Inputs
               type="email"
               label="Digite o seu E-mail"
               id="email"
               error={errors.email}
               register={register("email")}
            />
            <Inputs
               type="password"
               label="Digite a sua senha:"
               id="password"
               register={register("password")}
               error={errors.password}
            />

            <ButtonLogin type="submit">Login</ButtonLogin>

            <ButtonLogin onClick={() => setOpemModal(!opemModal)}>cadastrar</ButtonLogin>
         </FormStyled>

         {opemModal && (
            <ModalCreateClient
               opemModal={opemModal}
               setOpemModal={setOpemModal}
            />
         )}
      </>
   );
};

export default FormLogin;
