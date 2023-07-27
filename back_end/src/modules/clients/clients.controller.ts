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
   UseGuards,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiTags('Clients')
@Controller('clients')
@UseInterceptors(ClassSerializerInterceptor)
export class ClientsController {
   constructor(private readonly clientsService: ClientsService) {}

   @Post()
   create(@Body() data: CreateClientDto) {
      return this.clientsService.create(data);
   }

   @Get()
   @ApiBearerAuth()
   @UseGuards(JwtAuthGuard)
   findAll() {
      return this.clientsService.findAll();
   }

   @Get(':id')
   @ApiBearerAuth()
   @UseGuards(JwtAuthGuard)
   findOne(@Param('id') id: string) {
      return this.clientsService.findOne(id);
   }

   @Patch(':id')
   @ApiBearerAuth()
   @UseGuards(JwtAuthGuard)
   update(@Param('id') id: string, @Body() data: UpdateClientDto) {
      return this.clientsService.update(id, data);
   }

   @Delete(':id')
   @ApiBearerAuth()
   @UseGuards(JwtAuthGuard)
   remove(@Param('id') id: string) {
      return this.clientsService.remove(id);
   }
}
