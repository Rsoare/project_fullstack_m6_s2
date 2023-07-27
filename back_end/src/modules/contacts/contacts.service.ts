import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repository/contacts.repository';

@Injectable()
export class ContactsService {
   constructor(private contactsRepository: ContactsRepository) {}

   create(data: CreateContactDto, clientId: string) {
      return this.contactsRepository.create(data, clientId);
   }

   findAll() {
      return this.contactsRepository.findAll();
   }

   async findOne(id: string) {
      const findContact = await this.contactsRepository.findOne(id);

      if (!findContact) {
         throw new NotFoundException('contact not found');
      }

      return findContact;
   }

   async update(id: string, data: UpdateContactDto) {
      const findContact = await this.contactsRepository.findOne(id);

      if (!findContact) {
         throw new NotFoundException('contact not found');
      }

      return this.contactsRepository.update(id, data);
   }

   async remove(id: string) {
      const findContact = await this.contactsRepository.findOne(id);

      if (!findContact) {
         throw new NotFoundException('contact not found');
      }

      return this.contactsRepository.delete(id);
   }
}
