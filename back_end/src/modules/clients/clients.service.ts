import { Injectable } from '@nestjs/common';
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

   findOne(id: string) {
      return this.clientsRepository.findOne(id);
   }

   update(id: string, data: UpdateClientDto) {
      return this.clientsRepository.update(id, data);
   }

   remove(id: string) {
      return this.clientsRepository.delete(id);
   }
}
