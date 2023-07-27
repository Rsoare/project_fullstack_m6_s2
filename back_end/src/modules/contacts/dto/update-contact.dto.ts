import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateContactDto extends PartialType(CreateContactDto) {
   constructor(
      name: string,
      email: string,
      telephone: number,
      address: string,
   ) {
      super(name);

      this.name = name;
      this.email = email;
      this.telephone = telephone;
      this.address = address;
   }

   @ApiProperty({
      description: 'Nome do contato',
      default: 'bruno algustodo do carmo',
      type: String,
      required: false,
   })
   name: string;

   @ApiProperty({
      description: 'Email do contato',
      default: 'bruno@mail.com',
      type: String,
      required: false,
   })
   email: string;

   @ApiProperty({
      description: 'Numero de teledone do contato',
      default: 999999999,
      type: Number,
      required: false,
   })
   telephone: number;

   @ApiProperty({
      description: 'Endereço do contato',
      default: 'Rua primeira nº 01',
      type: String,
      required: false,
   })
   address: string;
}
