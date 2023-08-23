import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { WithDates } from 'src/base-entitys';
import { BaseUser, BaseUserPrismaSelect } from 'src/users/entities/user.entity';
import { BaseStore, BaseStorePrismaSelect } from './store.entity';
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

  @Field(() => BaseUser)
  user: BaseUser;
}

registerEnumType(StoreMemberRole, {
  name: 'StoreMemberRole',
});

export const BaseStoreMemberPrismaSelect = {
  id: true,
  role: true,
  userId: true,
  user: {
    select: BaseUserPrismaSelect,
  },
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.StoreMemberSelect<DefaultArgs>;

@ObjectType()
export class StoreMemberWithStore extends BaseStoreMember {
  @Field(() => String)
  storeId: string;

  @Field(() => BaseStore)
  store: BaseStore;
}

export const StoreMemberWithStorePrismaSelect = {
  id: true,
  role: true,
  userId: true,
  user: {
    select: BaseUserPrismaSelect,
  },
  storeId: true,
  store: { select: BaseStorePrismaSelect },
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.StoreMemberSelect<DefaultArgs>;
