import { createContext, useEffect, useState } from "react";
import {
   IloginContext,
   iDefaultProviderProps,
   iUserLogin,
} from "./@types";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { iContact } from "../contact/@types";
import { AxiosResponse } from "axios";
import { iClients } from "../clients/@types";

export const LoginContext = createContext({} as IloginContext);

export const LoginProvider = ({ children }: iDefaultProviderProps) => {
   const token = localStorage.getItem("@kaliSystem:token");

   const [user, setUser] = useState<iClients | null>(null);
   const [load, setLoad] = useState(false);

   const [userContacts, setUserContacts] = useState<iContact[]>([]);

   const navigate = useNavigate();

   useEffect(() => {
      if (token) {
         const autoLogin = async () => {
            const userid = jwt_decode<string>(token);

            try {
               setLoad(false);

               const response: AxiosResponse<iClients> = await api.get(
                  `/clients/${userid.sub}`,
                  {
                     headers: {
                        Authorization: `Bearer ${token}`,
                     },
                  }
               );

               const contacts = response.data.contacts;

               setUser(response.data);

               setUserContacts(contacts);

               navigate("/Protected/Dashboard");
            } catch (error) {
               console.error(error);
            } finally {
               setLoad(true);
            }
         };

         autoLogin();
      }
   }, [token]);

   const userLogin = async (data: iUserLogin) => {
      try {
         const response = await api.post("/client/login", data);

         toast.success("Login realizado com sucesso");

         localStorage.setItem("@kaliSystem:token", response.data.token);

         navigate("/Protected/Dashboard")

      } catch (error) {
         console.error(error);
         toast.error("Usuario ou senha incorretos");
      }
   };

   const userLogout = () => {
      setUser(null);
      localStorage.clear();
      navigate("/");
   };

   return (
      <LoginContext.Provider
         value={{
            userLogin,
            user,
            userLogout,
            load,
            userContacts,
            setUserContacts,
         }}
      >
         {children}
      </LoginContext.Provider>
   );
};


