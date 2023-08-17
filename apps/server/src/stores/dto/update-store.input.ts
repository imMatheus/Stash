import { CreateStoreInput } from './create-store.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStoreInput extends PartialType(CreateStoreInput) {
  @Field(() => Int)
  id: number;
}
