import Dialog from "@mui/material/Dialog";
import React, { useContext } from "react";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { ClientsContext } from "../../../contexts/clients";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "../../Form/Inputs";
import { iClientCreate } from "../../../contexts/clients/@types";
import { CreateSchema } from "./validation";
import { FormCreateStyled } from "./styled";

interface iModalProps {
   opemModal: boolean;
   setOpemModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCreateClient = ({ opemModal, setOpemModal }: iModalProps) => {
   const { createClient } = useContext(ClientsContext);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<iClientCreate>({ resolver: yupResolver(CreateSchema) });

   const modalClose = () => {
      setOpemModal(!opemModal);
   };

   const submit: SubmitHandler<iClientCreate> = (data) => {
      createClient(data);

      modalClose();
   };

   return (
      <>
         <Dialog
            open={opemModal}
            keepMounted
            onClose={modalClose}
            aria-describedby="alert-dialog-slide-description"
         >
            <FormCreateStyled onSubmit={handleSubmit(submit)}>
               <h3 className="Title Modal">Cadastrar Cliente</h3>

               <Inputs
                  type="text"
                  label="Nome:"
                  id="name"
                  error={errors.name}
                  register={register("name")}
               />
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
               <Inputs
                  type="text"
                  label="Telefone:"
                  id="telephone"
                  register={register("telephone")}
                  error={errors.telephone}
               />

               <DialogActions>
                  <Button
                     onClick={modalClose}
                     size="medium"
                     variant="contained"
                  >
                     Voltar
                  </Button>
                  <Button
                     color="success"
                     size="medium"
                     variant="contained"
                     type="submit"
                  >
                     Cadastrar
                  </Button>
               </DialogActions>
            </FormCreateStyled>
         </Dialog>
      </>
   );
};

export default ModalCreateClient;
