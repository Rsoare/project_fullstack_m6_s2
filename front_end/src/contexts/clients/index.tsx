import { createContext, useState } from "react";
import { api } from "../../services/api";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import {
   iClientCreate,
   iClientUpdate,
   iClients,
   iClientsContext,
   iDefaultProviderProps,
} from "./@types";

export const ClientsContext = createContext({} as iClientsContext);

export const ClientsProvide = ({ children }: iDefaultProviderProps) => {

   const [clients, setClients] = useState<iClients[]>([]);

   const token = localStorage.getItem("@kaliSystem:token");

   const getClients = async () => {
      try {
         const response: AxiosResponse<iClients[]> = await api.get(`/clients`);

         setClients(response.data);

      } catch (error) {
         console.error(error);
      }
   };

   const deleteClient = async (id: number) => {
      try {
         const response: AxiosResponse<void> = await api.delete(`/clients/${id}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         const newClientList = clients.filter(
            (client: iClients) => client.id !== id
         );

         setClients(newClientList);
      } catch (error) {
         toast.success("Cliente deletado com sucesso");
         console.error(error);
      }
   };

   const updateClient = async (data: iClientUpdate, id: number) => {
      try {
         const response: AxiosResponse<iClients> = await api.patch(
            `/client/${id}`,
            data,
            {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            }
         );
            
         const newClientList = clients.map((client) => {
            if (client.id == id) {
               return { ...client, ...response.data };
            } else {
               return client;
            }
         });
         setClients(newClientList);

         toast.success("Cliente editado com sucesso");

      } catch (error) {
         console.error(error);
      }
   };

   const createClient = async (data: iClientCreate) => {
      try {
         const response: AxiosResponse<iClients> = await api.post(
            "/clients",
            data
         );

         setClients([...clients, response.data]);

         toast.success("Cliente cadastrado com sucesso");
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <ClientsContext.Provider
         value={{
            clients,
            getClients,
            deleteClient,
            updateClient,
            createClient,
         }}
      >
         {children}
      </ClientsContext.Provider>
   );
};
