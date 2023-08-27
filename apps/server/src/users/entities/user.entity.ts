import { ObjectType, Field } from '@nestjs/graphql';
import { BaseAccount, BaseAccountPrismaSelect } from './account.entity';
import { WithDates } from 'src/base-entitys';
import type { Prisma } from '@prisma/client';
import type { DefaultArgs } from '@prisma/client/runtime/library';

@ObjectType()
export class BaseUser extends WithDates {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  username: string;

  @Field(() => String)
  profileImage: string;
}

export const BaseUserPrismaSelect = {
  id: true,
  profileImage: true,
  username: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.UserSelect<DefaultArgs>;

@ObjectType()
export class UserWithAccount extends BaseUser {
  @Field(() => String)
  accountId: string;

  @Field(() => BaseAccount)
  account: BaseAccount;
}

export const UserWithAccountPrismaSelect = {
  ...BaseUserPrismaSelect,
  accountId: true,
  account: {
    select: BaseAccountPrismaSelect,
  },
} satisfies Prisma.UserSelect<DefaultArgs>;
