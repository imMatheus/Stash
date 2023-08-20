import { Field, ObjectType } from '@nestjs/graphql';
import { BaseUser } from 'src/users/entities/user.entity';

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field(() => BaseUser)
  user: BaseUser;
}
