import { ApiProperty } from '@nestjs/swagger';
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
   @ApiProperty({
      description: 'Nome do contato',
      default: 'bruno algustodo do carmo',
      type: String,
   })
   name: string;

   @IsEmail()
   @IsNotEmpty()
   @ApiProperty({
      description: 'Email do contato',
      default: 'bruno@mail.com',
      type: String,
   })
   email: string;

   @IsNumber()
   @IsNotEmpty()
   @ApiProperty({
      description: 'Numero de teledone do contato',
      default: 999999999,
      type: Number,
   })
   telephone: number;

   @IsString()
   @IsNotEmpty()
   @MaxLength(100)
   @ApiProperty({
      description: 'Endereço do contato',
      default: 'Rua primeira nº 01',
      type: String,
   })
   address: string;
}
