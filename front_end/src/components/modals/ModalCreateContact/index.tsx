import Dialog from "@mui/material/Dialog";
import React, { useContext } from "react";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { FormCreateStyled } from "./styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "../../Form/Inputs";
import { createContactSchema } from "./validation";
import { ContactContext } from "../../../contexts/contact";
import { iContactCreate } from "../../../contexts/contact/@types";

interface iModalProps {
   opemModal: true;
   setOpemModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCreateContact = ({ opemModal, setOpemModal }: iModalProps) => {
   const { createContact } = useContext(ContactContext);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<iContactCreate>({ resolver: yupResolver(createContactSchema) });

   const modalClose = () => {
      setOpemModal(!opemModal);
   };

   const submit: SubmitHandler<iContactCreate> = (data) => {
      createContact(data);

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
               <h3 className="Title Modal">Cadastrar Contato</h3>
               <Inputs
                  type="text"
                  label="Nome:"
                  id="name"
                  error={errors.name}
                  register={register("name")}
               />
               <Inputs
                  type="text"
                  label="Email:"
                  id="Email"
                  register={register("email")}
                  error={errors.email}
               />
               <Inputs
                  type="text"
                  label="Telefone:"
                  id="telephone"
                  register={register("telephone")}
                  error={errors.telephone}
               />
               <Inputs
                  type="text"
                  label="Endereço:"
                  id="address"
                  register={register("address")}
                  error={errors.address}
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

export default ModalCreateContact;
