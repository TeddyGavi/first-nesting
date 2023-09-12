import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatService {
  private cats = [
    { id: 0, name: 'billy' },
    { id: 1, name: 'sally' },
  ];
  create(createCatDto: CreateCatDto) {
    return `This action adds a new cat ${createCatDto.name}`;
  }

  findAll() {
    return `This action returns all cat`;
  }

  findOne(id: number) {
    const cat = this.cats.find((cat) => cat.id === id);
    return `This action returns a #${id} cat ${cat.id} ${cat.name}`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat ${updateCatDto.name}`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
