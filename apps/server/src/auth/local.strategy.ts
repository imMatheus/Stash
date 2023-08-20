import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

type LocalStrategyConstructorOptions = ConstructorParameters<
  typeof Strategy
>[0];

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    console.log('sdadasdasd');

    super({
      usernameField: 'email', // Set the field name to 'email'
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string) {
    console.log('jjjj');

    const user = await this.authService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
