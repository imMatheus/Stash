import { Injectable } from '@nestjs/common';
import { CreateStoreInput } from './dto/create-store.input';
import { UpdateStoreInput } from './dto/update-store.input';
import { BaseStore, BaseStorePrismaSelect } from './entities/store.entity';
import { PrismaService } from 'src/prisma.service';
import {
  BaseStoreMember,
  BaseStoreMemberPrismaSelect,
} from './entities/member.entity';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) {}

  async create(
    createStoreInput: CreateStoreInput,
    userId: string,
  ): Promise<BaseStore> {
    const createdStore = await this.prisma.store.create({
      data: {
        name: createStoreInput.name,
        members: {
          create: {
            userId: userId,
            role: 'OWNER',
          },
        },
      },
      select: BaseStorePrismaSelect,
    });

    return createdStore;
  }

  async findAll(userId?: string): Promise<BaseStore[]> {
    return this.prisma.store.findMany({
      where: {
        members: {
          some: {
            userId,
          },
        },
      },
      select: BaseStorePrismaSelect,
    });
  }

  async findMembers(storeId: string): Promise<BaseStoreMember[]> {
    return this.prisma.storeMember.findMany({
      where: {
        storeId,
      },
      select: BaseStoreMemberPrismaSelect,
    });
  }

  findOne(storeId: string, userId: string): Promise<BaseStore> {
    return this.prisma.store.findFirst({
      where: {
        id: storeId,
        members: {
          some: {
            userId,
          },
        },
      },
      select: BaseStorePrismaSelect,
    }) as any;
  }

  update(id: number, updateStoreInput: UpdateStoreInput) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
