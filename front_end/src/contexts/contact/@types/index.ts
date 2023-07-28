export interface iDefaultProviderProps {
   children: React.ReactNode;
}

export interface iContact{
   id: number,
   name: string,
   email: string,
   telephone: number,
   address: number,
   createdAt: string,
   updatedAt: string,
}
export interface iContactUpdate{
   name?: string,
   email?: string,
   telephone?: number,
   address?: number,
}
export interface iContactCreate{
   name: string,
   email: string,
   telephone: number,
   address: number,
}

export interface iContactContext {
   getContacts: () => Promise<void>
   contacts: iContact[]
   deleteContact: (id: number) => Promise<void>
   updateContact: (data: iContactUpdate, id: number) => Promise<void>
   createContact: (data: iContactCreate) => Promise<void>
}