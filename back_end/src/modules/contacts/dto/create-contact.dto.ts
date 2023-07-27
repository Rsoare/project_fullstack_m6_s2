import {
   IsEmail,
   IsNotEmpty,
   IsNumber,
   IsString,
   MaxLength,
} from 'class-validator';

export class CreateContactDto {
   @IsString()
   @IsNotEmpty()
   name: string;

   @IsEmail()
   @IsNotEmpty()
   email: string;

   @IsNumber()
   @IsNotEmpty()
   telephone: number;

   @IsString()
   @IsNotEmpty()
   @MaxLength(100)
   address: string;
}
