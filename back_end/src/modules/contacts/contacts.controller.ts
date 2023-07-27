import {
   Controller,
   Get,
   Post,
   Body,
   Patch,
   Param,
   Delete,
   UseInterceptors,
   ClassSerializerInterceptor,
   UseGuards,
   Request,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiTags('Contacts')
@ApiBearerAuth()
@Controller('contacts')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class ContactsController {
   constructor(private readonly contactsService: ContactsService) {}

   @Post()
   create(@Body() bodyParams: CreateContactDto, @Request() req) {
      return this.contactsService.create(bodyParams, req.user.id);
   }

   @Get()
   findAll() {
      return this.contactsService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
      return this.contactsService.findOne(id);
   }

   @Patch(':id')
   update(@Param('id') id: string, @Body() bodyParams: UpdateContactDto) {
      return this.contactsService.update(id, bodyParams);
   }

   @Delete(':id')
   remove(@Param('id') id: string) {
      return this.contactsService.remove(id);
   }
}
