import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { BaseUser } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login-user.input';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<BaseUser | null> {
    console.log('hej hej 5666');
    const user = await this.usersService.findByEmail(email);
    console.log('6');

    if (!user) {
      return null;
    }
    console.log('7');

    const account = await this.usersService.findAccountForUser({
      userId: user.id,
    });
    console.log('8');

    if (!account) {
      return null;
    }
    console.log('9');

    const isValidPassword = await compare(password, account.password);

    if (isValidPassword) {
      return user;
    }
    console.log('10');

    return null;
  }

  async login(user: BaseUser) {
    console.log('jjjjasasas');

    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user,
    };
  }

  async signup(loginUserInput: LoginUserInput): Promise<BaseUser | null> {
    console.log('55555');
    const user = await this.usersService.findByEmail(loginUserInput.email);

    if (user) {
      throw new Error('User already exists');
      return null;
    }

    return this.usersService.create(loginUserInput);
  }
}
