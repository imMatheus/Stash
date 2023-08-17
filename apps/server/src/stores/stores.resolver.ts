import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StoresService } from './stores.service';
import { Store } from './entities/store.entity';
import { CreateStoreInput } from './dto/create-store.input';
import { UpdateStoreInput } from './dto/update-store.input';

@Resolver(() => Store)
export class StoresResolver {
  constructor(private readonly storesService: StoresService) {}

  @Mutation(() => Store)
  createStore(@Args('createStoreInput') createStoreInput: CreateStoreInput) {
    return this.storesService.create(createStoreInput);
  }

  @Query(() => [Store], { name: 'stores' })
  findAll() {
    return this.storesService.findAll();
  }

  @Query(() => Store, { name: 'store' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.storesService.findOne(id);
  }

  @Mutation(() => Store)
  updateStore(@Args('updateStoreInput') updateStoreInput: UpdateStoreInput) {
    return this.storesService.update(updateStoreInput.id, updateStoreInput);
  }

  @Mutation(() => Store)
  removeStore(@Args('id', { type: () => Int }) id: number) {
    return this.storesService.remove(id);
  }
}
