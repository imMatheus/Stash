import { Injectable } from '@nestjs/common';
import { CreateStoreInput } from './dto/create-store.input';
import { UpdateStoreInput } from './dto/update-store.input';
import { Store } from './entities/store.entity';

@Injectable()
export class StoresService {
  create(createStoreInput: CreateStoreInput) {
    return 'This action adds a new store';
  }

  findAll(): Store[] {
    return [{ exampleField: 2 }, { exampleField: 4 }];
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreInput: UpdateStoreInput) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
