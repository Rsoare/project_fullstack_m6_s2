import { useContext,useEffect,useState } from "react";
import Button from "@mui/material/Button";
import { UlStyled } from "./styled";
import { iContact } from "../../contexts/contact/@types";
import ModalCreateContact from "../modals/ModalCreateContact";
import ContactItems from "../itemsCollections/ContactItems";
import { LoginContext } from "../../contexts/login";

const Collections = () => {

   const {userContacts} = useContext(LoginContext)

   const [opemModal, setOpemModal] = useState(false);


   return (
      <>
         <h2 className="Title Collections">Lista de Contatos</h2>
         <h3 className="Title Modal">Cadastrar</h3>

         <UlStyled className="collection with-header ">
            <div>
               <Button
                  onClick={() => setOpemModal(!opemModal)}
                  size="medium"
                  variant="contained"
                  sx={{ width: "25%" }}
               >
                  Contato
               </Button>
               {userContacts.map((contact: iContact) => (
                  <ContactItems key={contact.id} contact={contact} />
               ))}
            </div>
         </UlStyled>

         {opemModal && (
            <ModalCreateContact
               opemModal={opemModal}
               setOpemModal={setOpemModal}
            />
         )}
      </>
   );
};

export default Collections;
