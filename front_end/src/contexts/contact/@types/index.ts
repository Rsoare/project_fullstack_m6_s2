export interface iDefaultProviderProps {
   children: React.ReactNode;
}

export interface iContact{
   id: number,
   name: string,
   email: string,
   telephone: number,
   address: string,
   createdAt: string,
   updatedAt: string,
}
export interface iContactUpdate{
   name: string | null | undefined,
   email: string | null | undefined,
   telephone:number | null | undefined,
   address: string | null | undefined,
}
export interface iContactCreate{
   name: string,
   email: string,
   telephone: number,
   address: string,
}

export interface iContactContext {
   getContacts: () => Promise<void>
   contacts: iContact[]
   deleteContact: (id: number) => Promise<void>
   updateContact: (data: iContactUpdate, id: number) => Promise<void>
   createContact: (data: iContactCreate) => Promise<void>
}