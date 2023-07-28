import { iContact } from "../../contact/@types";

export interface iDefaultProviderProps {
   children: React.ReactNode;
}

export interface iClientsContext {
   clients: iClients[]
   getClients: () => Promise<void>
   deleteClient: (id: number) => Promise<void>
   createClient: (data: iClientCreate) => Promise<void>
   updateClient: (data: iClientUpdate, id: number) => Promise<void>
}

export interface iClients {
   id:number
   name:string
   email:string
   password?: string
   telephone:number
   createdAt:string
   updatedAt:string
   contacts: iContact[]
}

export interface iClientUpdate {
   name?:string
   email?:string
   password?: string
   telephone?:number
}
export interface iClientCreate {
   name:string
   email:string
   password: string
   telephone:number
}


