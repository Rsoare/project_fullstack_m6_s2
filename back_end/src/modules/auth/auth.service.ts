import { Injectable } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
   constructor(
      private clientsService: ClientsService,
      private jwtService: JwtService,
   ) {}

   async validateClient(email: string, password: string) {
      const client = await this.clientsService.findByEmail(email);

      if (client) {
         const passwordCrypt = await compare(password, client.password);

         if (passwordCrypt) {
            return { email: client.email };
         }
      }

      return null;
   }

   async login(email: string) {
      const client = await this.clientsService.findByEmail(email);

      const payload = { email: client.email, sub: client.id };

      return {
         token: this.jwtService.sign(payload),
      };
   }
}
