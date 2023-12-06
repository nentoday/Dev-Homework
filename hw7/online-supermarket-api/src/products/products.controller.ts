import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.sevice';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): any {
    return this.productsService.getProducts();
  }

  @Post()
  createProduct(@Body() productData: any): any {
    return this.productsService.createProduct(productData);
  }
}
