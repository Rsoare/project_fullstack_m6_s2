import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginClientDto {
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
   @ApiProperty({
      description: 'Senha do cliente, minimo de 8 digitos',
      default: '12345678',
      type: String,
   })
   password: string;
}
