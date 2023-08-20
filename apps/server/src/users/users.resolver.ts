import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { BaseUser } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver(() => BaseUser)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // @UseGuards(JwtAuthGuard)
  @Query(() => [BaseUser], { name: 'users' })
  findAll(@Context() context) {
    console.log({ context: context.req.user });

    return this.usersService.findAll();
  }

  @Query(() => BaseUser, { name: 'user' })
  findOne(@Args('email') email: string) {
    return this.usersService.findByEmail(email);
  }
}
