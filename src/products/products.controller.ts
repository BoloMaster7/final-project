import { 
  Controller,
  Get,
  Param,
  ParseUUIDPipe
 } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/')
  getAll() {
    return this.productService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productService.getById(id);
    if (!product) throw new Error('Product not found');
    return product;
  }
}