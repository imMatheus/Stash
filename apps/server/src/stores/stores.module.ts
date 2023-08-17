import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresResolver } from './stores.resolver';

@Module({
  providers: [StoresResolver, StoresService]
})
export class StoresModule {}
