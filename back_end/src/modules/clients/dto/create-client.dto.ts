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
   name: string;

   @IsEmail()
   @IsNotEmpty()
   email: string;

   @IsString()
   @IsNotEmpty()
   @MinLength(8)
   @Transform(({ value }: { value: string }) => hashSync(value), {
      groups: ['transform'],
   })
   password: string;

   @IsNumber()
   @IsNotEmpty()
   telephone: number;
}
