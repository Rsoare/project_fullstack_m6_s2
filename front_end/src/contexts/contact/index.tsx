import { createContext,useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { AxiosResponse } from "axios";
import {
   iDefaultProviderProps,
   iContactContext,
   iContact,
   iContactUpdate,
   iContactCreate,
} from "./@types";

export const ContactContext = createContext({} as iContactContext);

export const ContactProvide = ({ children }: iDefaultProviderProps) => {

   const [contacts, setContacts] = useState<iContact[]>([]);

   const getContacts = async () => {
      try {
         const response: AxiosResponse<iContact[]> = await api.get(
            `/contacts`
         );

         setContacts(response.data);
   
      } catch (error) {
         console.error(error);
      }
   };

   const deleteContact = async (id:number) => {

      try {
         const response: AxiosResponse<void> = await api.patch(`/contacts/${id}`);

         const newContactList = contacts.filter(
            (contact: iContact) => contact.id !== id
         );

         setContacts(newContactList);
      } catch (error){
         console.error(error);
      }
   };

   const updateContact = async (data: iContactUpdate, id: number) => {
      try {
         const response: AxiosResponse<iContact> = await api.patch(
            `/contacts/${id}`,
            data
         );

         const newContactsList = contacts.map((contact) => {
            if (contact.id == id) {
               return { ...contact, ...response.data };
            } else {
               return contact;
            }
         });

         setContacts(newContactsList);

         toast.success("Contato editado com Sucesso")
      } catch (error) {
         console.error(error);
      }
   };

   const createContact = async (data: iContactCreate) => {
      try {
         const response: AxiosResponse<iContact> = await api.post(
            "/contacts",
            data
         );

         setContacts([...contacts, response.data]);

         toast.success("Contato criado com sucesso");
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <ContactContext.Provider
         value={{
            getContacts,
            deleteContact,
            updateContact,
            createContact,
            contacts
         }}
      >
         {children}
      </ContactContext.Provider>
   );
};
