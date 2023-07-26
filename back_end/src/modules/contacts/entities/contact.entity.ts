import { Exclude } from 'class-transformer';

export class Contact {
   readonly id: number;
   name: string;
   email: string;
   telephone: number;
   address: string;

   @Exclude()
   clientId: number;

   readonly createdAt: Date;
   readonly updatedAt: Date;
}
