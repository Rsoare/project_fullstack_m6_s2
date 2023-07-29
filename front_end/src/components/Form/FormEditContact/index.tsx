import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "../Inputs";
import { useContext } from "react";
import { FormContactStyled } from "./styled";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { EditContactSchema} from "./validation";
import { ContactContext } from "../../../contexts/contact";
import { iContactUpdate } from "../../../contexts/contact/@types";

interface iFormProps {
   id: number;
   modalClose: () => void;
}
const FormEditContact = ({ id, modalClose }: iFormProps) => {

   const { updateContact } = useContext(ContactContext);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<iContactUpdate>({ resolver: yupResolver(EditContactSchema)});

   const submit: SubmitHandler<iContactUpdate> = (data) => {
      updateContact (data, id);

      modalClose();
   };

   return (
      <FormContactStyled onSubmit={handleSubmit(submit)}>
         <h2 className="Title Modal"> Editar Contato</h2>
         <Inputs
            type="text"
            label="Nome: (opcional)"
            id="name"
            error={errors.name}
            register={register("name")}
         />
         <Inputs
            type="text"
            label="Email: (opcional)"
            id="Email"
            register={register("email")}
            error={errors.email}
         />
         <Inputs
            type="text"
            label="Telefone: (opcional)"
            id="telephone"
            register={register("telephone")}
            error={errors.telephone}
         />
         <Inputs
            type="text"
            label="Endereço: (opcional)"
            id="address"
            register={register("address")}
            error={errors.address}
         />

         <DialogActions>
            <Button onClick={modalClose} size="medium" variant="contained">
               Voltar
            </Button>
            <Button
               color="success"
               size="medium"
               variant="contained"
               type="submit"
            >
               Editar
            </Button>
         </DialogActions>
      </FormContactStyled>
   );
};

export default FormEditContact;
