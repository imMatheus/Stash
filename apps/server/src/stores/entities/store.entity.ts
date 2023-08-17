import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Store {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
