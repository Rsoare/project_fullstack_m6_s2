import { iClients } from "../../clients/@types";
import { iContact } from "../../contact/@types";

export interface iDefaultProviderProps {
   children: React.ReactNode;
}

export interface IloginContext{
   userContacts: iContact[]
   userLogin: (data: iUserLogin) => Promise<void>
   setUserContacts: React.Dispatch<React.SetStateAction<iContact[]>>
   user: iClients | null
   userLogout: () => void
   load: boolean
}

export interface iUser {
   token: string 
}


export interface iUserLogin {
   email: string;
   password: string;
}