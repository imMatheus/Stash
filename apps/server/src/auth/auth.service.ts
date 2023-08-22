import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { BaseUser } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login-user.input';
import { compare } from 'bcrypt';
import { LoginResponse } from './dto/login-response';

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
      throw new Error(
        'Could not find user with that email or the password is wrong',
      );
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

    throw new Error(
      'Could not find user with that email or the password is wrong',
    );
  }

  async login(user: BaseUser): Promise<LoginResponse> {
    console.log('jjjjasasas');

    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user,
    };
  }

  async signup(loginUserInput: LoginUserInput): Promise<LoginResponse> {
    const userWithEmail = await this.usersService.findByEmail(
      loginUserInput.email,
    );

    if (userWithEmail) {
      throw new Error(
        `User with the email address ${loginUserInput.email} already exists`,
      );
    }

    const createdUser = await this.usersService.create(loginUserInput);

    return {
      access_token: this.jwtService.sign({
        username: createdUser.username,
        sub: createdUser.id,
      }),
      user: createdUser,
    };
  }
}
