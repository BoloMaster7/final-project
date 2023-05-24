import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Products } from './products.interface';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  public async getAll(): Promise<Products[]> {
    return this.prismaService.product.findMany();
  }

  public getById(id: Products['id']): Promise<Products | null> {
    return this.prismaService.product.findUnique({
      where: { id },
    });
  }
}
