import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { LoginResponse } from './dto/login-response';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ): Promise<LoginResponse> {
    console.log('heej');

    return this.authService.login(context.user);
  }

  @Mutation(() => LoginResponse)
  signup(
    @Args('signUpInput') signUpInput: LoginUserInput,
  ): Promise<LoginResponse> {
    console.log('heej ddååå');
    return this.authService.signup(signUpInput);
  }
}
