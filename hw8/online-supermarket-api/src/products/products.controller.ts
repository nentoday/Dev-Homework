import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.sevice';
import { ProductCreateDto } from './dto/product-create.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): any {
    return this.productsService.getProducts();
  }

  @Post()
  createProduct(
    @Body(new ValidationPipe()) productData: ProductCreateDto,
  ): any {
    return this.productsService.createProduct(productData);
  }
}
