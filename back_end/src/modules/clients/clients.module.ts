import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ClientsRepository } from './repository/clients.repository';
import { ClientsPrismaRepository } from './repository/prisma/clients.prisma.repository';

@Module({
   controllers: [ClientsController],
   providers: [
      ClientsService,
      PrismaService,
      {
         provide: ClientsRepository,
         useClass: ClientsPrismaRepository,
      },
   ],
})
export class ClientsModule {}
