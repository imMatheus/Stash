import { ObjectType, Field } from '@nestjs/graphql';
import { WithDates } from 'src/base-entitys';
import { BaseStoreMember, BaseStoreMemberPrismaSelect } from './member.entity';
import type { Prisma } from '@prisma/client';
import type { DefaultArgs } from '@prisma/client/runtime/library';

@ObjectType()
export class BaseStore extends WithDates {
  @Field(() => String, { description: 'Id of store' })
  id: string;

  @Field(() => String, { description: 'Name of store' })
  name: string;
}

export const BaseStorePrismaSelect = {
  id: true,
  name: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.StoreSelect<DefaultArgs>;

@ObjectType()
export class StoreWithMembers extends BaseStore {
  @Field(() => [BaseStoreMember], { description: 'Members of the store' })
  members: BaseStoreMember[];
}

export const StoreWithMembersPrismaSelect = {
  id: true,
  name: true,
  members: { select: BaseStoreMemberPrismaSelect },
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.StoreSelect<DefaultArgs>;
