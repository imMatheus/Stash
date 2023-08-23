import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { StoresService } from './stores.service';
import { BaseStore, StoreWithMembers } from './entities/store.entity';
import { CreateStoreInput } from './dto/create-store.input';
import { UpdateStoreInput } from './dto/update-store.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Resolver(() => BaseStore)
export class StoresResolver {
  constructor(private readonly storesService: StoresService) {}

  @Mutation(() => BaseStore, { name: 'createStore' })
  createStore(
    @Args('createStoreInput') createStoreInput: CreateStoreInput,
    @Context() context,
  ): Promise<BaseStore> {
    return this.storesService.create(createStoreInput, context.req.user.userId);
  }

  @Query(() => [BaseStore], { name: 'stores' })
  findAll(@Context() context): Promise<BaseStore[]> {
    return this.storesService.findAll(context.req.user.userId);
  }

  @Query(() => StoreWithMembers, { name: 'store' })
  findOne(
    @Args('id', { type: () => String }) id: string,
    @Context() context,
  ): Promise<StoreWithMembers> {
    return this.storesService.findOne(id, context.req.user.userId);
  }

  @Mutation(() => BaseStore, { name: 'updateStore' })
  updateStore(@Args('updateStoreInput') updateStoreInput: UpdateStoreInput) {
    return this.storesService.update(updateStoreInput.id, updateStoreInput);
  }

  @Mutation(() => BaseStore, { name: 'removeStore' })
  removeStore(@Args('id', { type: () => Int }) id: number) {
    return this.storesService.remove(id);
  }
}
