import { InputType, Field } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class CreateStoreInput {
  @Length(2, 35)
  @Field(() => String, { description: 'Name of the store' })
  name: string;
}
