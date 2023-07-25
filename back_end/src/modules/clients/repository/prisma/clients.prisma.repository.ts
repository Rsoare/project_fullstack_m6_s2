import { Injectable } from '@nestjs/common';
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

      const newClient = await this.prisma.client.create({
         data: { ...client },
      });

      return plainToInstance(Client, newClient);
   }

   async findAll(): Promise<Client[]> {
      const clients: Client[] = await this.prisma.client.findMany();
      return plainToInstance(Client, clients);
   }

   async findOne(clientId: string): Promise<Client> {
      const id: number = parseInt(clientId);

      const client = await this.prisma.client.findUnique({
         where: { id },
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
}
