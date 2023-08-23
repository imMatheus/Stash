import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresResolver } from './stores.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [StoresResolver, StoresService, PrismaService],
})
export class StoresModule {}
