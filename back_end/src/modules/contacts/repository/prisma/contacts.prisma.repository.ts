import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ContactsRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { plainToInstance } from 'class-transformer';
import { UpdateContactDto } from '../../dto/update-contact.dto';

@Injectable()
export class ContactPrismaRepository implements ContactsRepository {
   constructor(private prisma: PrismaService) {}

   async create(data: CreateContactDto): Promise<Contact> {
      const contact = new Contact();

      Object.assign(contact, {
         ...data,
      });

      try {
         const newContact = await this.prisma.contact.create({
            data: { ...contact },
         });
         return plainToInstance(Contact, newContact);
      } catch (error) {
         if (error.code == 'P2002') {
            throw new ConflictException('Email already registered');
         }
      }
   }

   async findAll(): Promise<Contact[]> {
      const contacts: Contact[] = await this.prisma.contact.findMany();
      return plainToInstance(Contact, contacts);
   }

   async findOne(contactId: string): Promise<Contact> {
      const id: number = parseInt(contactId);

      const contact = await this.prisma.contact.findUnique({
         where: { id },
      });

      return plainToInstance(Contact, contact);
   }

   async update(contactId: string, data: UpdateContactDto): Promise<Contact> {
      const id: number = parseInt(contactId);

      const contact = await this.prisma.contact.update({
         where: { id },
         data: { ...data },
      });

      return plainToInstance(Contact, contact);
   }

   async delete(contactId: string): Promise<void> {
      const id: number = parseInt(contactId);

      await this.prisma.contact.delete({
         where: { id },
      });
   }
}
