import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './repository/clients.repository';

@Injectable()
export class ClientsService {
   constructor(private clientsRepository: ClientsRepository) {}

   create(data: CreateClientDto) {
      return this.clientsRepository.create(data);
   }

   findAll() {
      return this.clientsRepository.findAll();
   }

   async findOne(id: string) {
      const findClient = await this.clientsRepository.findOne(id);

      if (!findClient) {
         throw new NotFoundException('client not found');
      }
      return findClient;
   }

   async update(id: string, data: UpdateClientDto) {
      const findClient = await this.clientsRepository.findOne(id);

      if (!findClient) {
         throw new NotFoundException('client not found');
      }

      return this.clientsRepository.update(id, data);
   }

   async remove(id: string) {
      const findClient = await this.clientsRepository.findOne(id);

      if (!findClient) {
         throw new NotFoundException('client not found');
      }

      return this.clientsRepository.delete(id);
   }

   findByEmail(email: string) {
      return this.clientsRepository.findByEmail(email);
   }
}
