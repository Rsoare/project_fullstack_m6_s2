import { Exclude } from 'class-transformer';

export class Client {
   readonly id: number;
   name: string;

   @Exclude()
   password: string;

   email: string;
   telephone: number;
   readonly createdAt: Date;
   readonly updatedAt: Date;
}
