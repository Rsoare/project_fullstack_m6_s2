import {
   Controller,
   Get,
   Post,
   Body,
   Patch,
   Param,
   Delete,
   ClassSerializerInterceptor,
   UseInterceptors,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
   constructor(private readonly clientsService: ClientsService) {}

   @UseInterceptors(ClassSerializerInterceptor)
   @Post()
   create(@Body() data: CreateClientDto) {
      return this.clientsService.create(data);
   }

   //@UseInterceptors(ClassSerializerInterceptor)
   @Get()
   findAll() {
      return this.clientsService.findAll();
   }

   //@UseInterceptors(ClassSerializerInterceptor)
   @Get(':id')
   findOne(@Param('id') id: string) {
      return this.clientsService.findOne(id);
   }

   //@UseInterceptors(ClassSerializerInterceptor)
   @Patch(':id')
   update(@Param('id') id: string, @Body() data: UpdateClientDto) {
      return this.clientsService.update(id, data);
   }

   //@UseInterceptors(ClassSerializerInterceptor)
   @Delete(':id')
   remove(@Param('id') id: string) {
      return this.clientsService.remove(id);
   }
}
