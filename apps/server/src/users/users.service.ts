import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { PrismaService } from 'src/prisma.service';
import { hash } from 'bcrypt';
import { BaseUser, BaseUserPrismaSelect } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput): Promise<BaseUser | null> {
    const password = await hash(createUserInput.password, 10);

    const lowercaseEmail = createUserInput.email.toLowerCase();
    const account = await this.prisma.account.create({
      data: {
        password,
        email: lowercaseEmail,
        user: {
          create: {
            profileImage:
              'https://api.dicebear.com/6.x/adventurer/svg?seed=Simba',
          },
        },
      },
      select: {
        user: {
          select: BaseUserPrismaSelect,
        },
      },
    });

    return account?.user;
  }

  async findAccountForUser({
    userId,
  }: {
    userId: string;
  }): Promise<{ password: string } | null> {
    const accountForUser = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        account: {
          select: {
            password: true,
          },
        },
      },
    });

    return accountForUser?.account || null;
  }

  async findAll(): Promise<BaseUser[]> {
    return await this.prisma.user.findMany({ select: BaseUserPrismaSelect });
  }

  async findByEmail(email: string): Promise<BaseUser | null> {
    const account = await this.prisma.account.findFirst({
      where: { email: email },
      select: {
        user: {
          select: BaseUserPrismaSelect,
        },
      },
    });

    return account?.user;
  }
}
