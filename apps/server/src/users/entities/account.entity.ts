import { ObjectType, Field } from '@nestjs/graphql';
import type { Prisma } from '@prisma/client';
import type { DefaultArgs } from '@prisma/client/runtime/library';
import { WithDates } from 'src/base-entitys';

@ObjectType()
export class BaseAccount extends WithDates {
  @Field(() => String)
  id: string;

  @Field(() => String)
  email: string;
}

export const BaseAccountPrismaSelect: Prisma.AccountSelect<DefaultArgs> = {
  id: true,
  email: true,
  createdAt: true,
  updatedAt: true,
};
