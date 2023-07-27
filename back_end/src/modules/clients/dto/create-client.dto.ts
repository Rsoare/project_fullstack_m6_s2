import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
   IsEmail,
   IsNotEmpty,
   IsNumber,
   IsString,
   MinLength,
} from 'class-validator';

export class CreateClientDto {
   @IsString()
   @IsNotEmpty()
   @ApiProperty({
      description: 'Nome do cliente',
      default: 'maria rosaria da silva ',
      type: String,
   })
   name: string;

   @IsEmail()
   @IsNotEmpty()
   @ApiProperty({
      description: 'Email do cliente',
      default: 'maria@mail.com',
      type: String,
   })
   email: string;

   @IsString()
   @IsNotEmpty()
   @MinLength(8)
   @Transform(({ value }: { value: string }) => hashSync(value), {
      groups: ['transform'],
   })
   @ApiProperty({
      description: 'Senha do cliente, minimo de 8 digitos',
      default: '12345678',
      type: String,
   })
   password: string;

   @IsNumber()
   @IsNotEmpty()
   @ApiProperty({
      description: 'Numero de teledone do cliente',
      default: 999999999,
      type: Number,
   })
   telephone: number;
}
