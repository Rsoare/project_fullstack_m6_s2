import { createContext, useContext, useState } from "react";
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
import { LoginContext } from "../login";


export const ContactContext = createContext({} as iContactContext);

export const ContactProvide = ({ children }: iDefaultProviderProps) => {

   const [contacts, setContacts] = useState<iContact[]>([]);

   const token = localStorage.getItem("@kaliSystem:token");

   const {userContacts, setUserContacts} = useContext(LoginContext)
   
   const getContacts = async () => {
      try {
         const response: AxiosResponse<iContact[]> = await api.get(
            `/contacts`,
            {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            }
         );

      } catch (error) {
         console.error(error);
      }
   };

   const deleteContact = async (id: number) => {
      try {
         const response: AxiosResponse<void> = await api.delete(`/contacts/${id}`,
            {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            }
         );

         const newContactList = userContacts.filter(
            (contact: iContact) => contact.id !== id
         );

         setUserContacts(newContactList);
      } catch (error) {
         console.error(error);
      }
   };

   const updateContact = async (data: iContactUpdate, id: number) => {
      try {
         const response: AxiosResponse<iContact> = await api.patch(
            `/contacts/${id}`,
            data,
            {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            }
         );

         const newContactsList = userContacts.map((contact) => {

            if (contact.id == id) {
               return { ...contact, ...response.data };
            } else {
               return contact;
            }
         });

         setUserContacts(newContactsList)

         toast.success("Contato editado com Sucesso");
      } catch (error) {
         console.error(error);
      }
   };

   const createContact = async (data: iContactCreate) => {
      try {
         const response: AxiosResponse<iContact> = await api.post(
            "/contacts",
            data,
            {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            }
         );

         setUserContacts([...userContacts, response.data]);

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
            contacts,
         }}
      >
         {children}
      </ContactContext.Provider>
   );
};


