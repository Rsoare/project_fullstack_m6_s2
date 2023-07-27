import {
   Body,
   ClassSerializerInterceptor,
   Controller,
   Post,
   UseGuards,
   UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.auth.guard';
import { LoginClientDto } from './dto/login.dto';

@Controller('client/login')
@UseGuards(LocalAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
   constructor(private readonly authService: AuthService) {}

   @Post()
   async login(@Body() bodyParams: LoginClientDto) {
      return this.authService.login(bodyParams.email);
   }
}
