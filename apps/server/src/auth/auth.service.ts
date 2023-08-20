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
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      return null;
    }

    const account = await this.usersService.findAccountForUser({
      userId: user.id,
    });

    if (!account) {
      return null;
    }

    const isValidPassword = await compare(password, account.password);

    if (isValidPassword) {
      return user;
    }

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
