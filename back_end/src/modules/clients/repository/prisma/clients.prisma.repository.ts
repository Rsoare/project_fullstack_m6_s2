import { ConflictException, Injectable } from '@nestjs/common';
import { ClientsRepository } from '../clients.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateClientDto } from '../../dto/create-client.dto';
import { Client } from '../../entities/client.entity';
import { plainToInstance } from 'class-transformer';
import { UpdateClientDto } from '../../dto/update-client.dto';

@Injectable()
export class ClientsPrismaRepository implements ClientsRepository {
   constructor(private prisma: PrismaService) {}

   async create(data: CreateClientDto): Promise<Client> {
      const client = new Client();

      Object.assign(client, {
         ...data,
      });

      try {
         const newClient = await this.prisma.client.create({
            data: { ...client },
         });
         return plainToInstance(Client, newClient);
      } catch (error) {
         if (error.code == 'P2002') {
            throw new ConflictException('Email already registered');
         }
      }
   }

   async findAll(): Promise<Client[]> {
      const clients: Client[] = await this.prisma.client.findMany({
         include: {
            contacts: true,
         },
      });
      return plainToInstance(Client, clients);
   }

   async findOne(clientId: string): Promise<Client> {
      const id: number = parseInt(clientId);

      const client = await this.prisma.client.findUnique({
         where: { id },
         include: {
            contacts: true,
         },
      });

      return plainToInstance(Client, client);
   }

   async update(clientId: string, data: UpdateClientDto): Promise<Client> {
      const id: number = parseInt(clientId);

      const client = await this.prisma.client.update({
         where: { id },
         data: { ...data },
      });

      return plainToInstance(Client, client);
   }

   async delete(clientId: string): Promise<void> {
      const id: number = parseInt(clientId);

      await this.prisma.client.delete({
         where: { id },
      });
   }

   async findByEmail(email: string): Promise<Client> {
      const client = await this.prisma.client.findUnique({
         where: { email },
      });

      return client;
   }
}
