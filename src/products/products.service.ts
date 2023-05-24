import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Products } from './products.interface';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}
}