import { LiStyled } from "./styled";
import { useState, useContext } from "react";
import { iContact } from "../../../contexts/contact/@types";
import { ContactContext } from "../../../contexts/contact";
import ModalDelete from "../../modals/modalDelete";
import ModalEdit from "../../modals/modalEdit";


interface iContactProps {
   contact: iContact;
}
const ContactItems = ({ contact }: iContactProps) => {

   const { deleteContact } = useContext(ContactContext);

   const [opemModal, setOpemModal] = useState(false);
   const [opemModalEdit, setOpemModalEdit] = useState(false);

   const {name,email,telephone,address,createdAt,id} = contact

   const formatDate = new Date(createdAt).toLocaleDateString();

   return (
      <>
         <LiStyled className="collection-item grey lighten-3">
            <div>
               <p>
                  <span>Nome: </span>
                  {name}
               </p>
               <p>
                  <span>Email: </span>
                  {email}
               </p>
               <p>
                  <span>Telefone: </span>
                  {telephone}
               </p>
               <p>
                  <span>Endereço: </span>
                  {address}
               </p>
               <p>
                  <span>Data de cadastro: </span>
                  {formatDate}
               </p>
            </div>
            <button>
               <i
                  className="material-icons"
                  onClick={() => setOpemModal(!opemModal)}
               >
                  delete_forever
               </i>
            </button>
            <button>
               <i
                  className="material-icons icon__edit"
                  onClick={() => setOpemModalEdit(!opemModalEdit)}
               >
                  edit
               </i>
            </button>
         </LiStyled>

         {opemModal && (
            <ModalDelete
               opemModal={opemModal}
               setOpemModal={setOpemModal}
               id={id}
               requestDelete={deleteContact}
            />
         )}

         {opemModalEdit && (
            <ModalEdit
               opemModalEdit={opemModalEdit}
               setOpemModalEdit={setOpemModalEdit}
               id={id}
            />
         )}
      </>
   );
};

export default ContactItems;
