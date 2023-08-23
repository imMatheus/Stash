import { Injectable } from '@nestjs/common';
import { CreateStoreInput } from './dto/create-store.input';
import { UpdateStoreInput } from './dto/update-store.input';
import {
  BaseStore,
  BaseStorePrismaSelect,
  StoreWithMembers,
  StoreWithMembersPrismaSelect,
} from './entities/store.entity';
import { PrismaService } from 'src/prisma.service';

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
          },
        },
      },
      select: BaseStorePrismaSelect,
    });

    return createdStore;
  }

  async findAll(userId: string): Promise<BaseStore[]> {
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

  findOne(storeId: string, userId: string): Promise<StoreWithMembers> {
    return this.prisma.store.findFirst({
      where: {
        id: storeId,
        members: {
          some: {
            userId,
          },
        },
      },
      select: StoreWithMembersPrismaSelect,
    }) as any;
  }

  update(id: number, updateStoreInput: UpdateStoreInput) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
