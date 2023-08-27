import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { WithDates } from 'src/base-entitys';
import {
  UserWithAccount,
  UserWithAccountPrismaSelect,
} from 'src/users/entities/user.entity';
import { type Prisma, StoreMemberRole } from '@prisma/client';
import type { DefaultArgs } from '@prisma/client/runtime/library';

@ObjectType()
export class BaseStoreMember extends WithDates {
  @Field(() => String, { description: 'Id of member' })
  id: string;

  @Field(() => StoreMemberRole, { description: 'Role of the user' })
  role: StoreMemberRole;

  @Field(() => String)
  userId: string;

  @Field(() => UserWithAccount)
  user: UserWithAccount;
}

registerEnumType(StoreMemberRole, {
  name: 'StoreMemberRole',
});

export const BaseStoreMemberPrismaSelect = {
  id: true,
  role: true,
  userId: true,
  user: { select: UserWithAccountPrismaSelect },
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.StoreMemberSelect<DefaultArgs>;
