import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClientDto extends PartialType(CreateClientDto) {
   constructor(
      name: string,
      email: string,
      password: string,
      telephone: number,
   ) {
      super(name);

      this.name = name;
      this.email = email;
      this.password = password;
      this.telephone = telephone;
   }

   @ApiProperty({
      description: 'Nome do cliente',
      default: 'bruna rosaria da silva ',
      type: String,
      required: false,
   })
   name: string;

   @ApiProperty({
      description: 'Email do cliente',
      default: 'bruna@mail.com',
      type: String,
      required: false,
   })
   email: string;

   @ApiProperty({
      description: 'Senha do cliente, minimo de 8 digitos',
      default: '87654321',
      type: String,
      required: false,
   })
   password: string;

   @ApiProperty({
      description: 'Numero de teledone do cliente',
      default: 999995555,
      type: Number,
      required: false,
   })
   telephone: number;
}
