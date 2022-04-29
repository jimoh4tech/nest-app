import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthServie } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthServie) {}

  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
