import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repository/contacts.repository';

@Injectable()
export class ContactsService {
   constructor(private contactsRepository: ContactsRepository) {}

   create(data: CreateContactDto) {
      return this.contactsRepository.create(data);
   }

   findAll() {
      return this.contactsRepository.findAll();
   }

   findOne(id: string) {
      return this.contactsRepository.findOne(id);
   }

   update(id: string, data: UpdateContactDto) {
      return this.contactsRepository.update(id, data);
   }

   remove(id: string) {
      return this.contactsRepository.delete(id);
   }
}
