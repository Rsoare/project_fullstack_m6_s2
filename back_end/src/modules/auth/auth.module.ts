import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ClientsModule } from '../clients/clients.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ContactsModule } from '../contacts/contacts.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import 'dotenv/config';
import { ClientsService } from '../clients/clients.service';
import { PrismaService } from 'src/database/prisma.service';
import { ClientsRepository } from '../clients/repository/clients.repository';
import { ClientsPrismaRepository } from '../clients/repository/prisma/clients.prisma.repository';

@Module({
   imports: [
      ClientsModule,
      ContactsModule,
      PassportModule,
      JwtModule.register({
         secret: process.env.SECRET_KEY,
         signOptions: { expiresIn: '1h' },
      }),
   ],
   controllers: [AuthController],
   providers: [
      ClientsService,
      AuthService,
      LocalStrategy,
      JwtStrategy,
      PrismaService,
      {
         provide: ClientsRepository,
         useClass: ClientsPrismaRepository,
      },
   ],
})
export class AuthModule {}
