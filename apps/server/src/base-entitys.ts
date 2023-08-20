import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class WithDates {
  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
