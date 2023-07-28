import { string } from "yup";

export interface iDefaultProviderProps {
   children: React.ReactNode;
}

export interface IloginContext{
   userLogin: (data: iUserLogin) => Promise<void>
   user: iUser | null
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