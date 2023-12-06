import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 'product1',
      name: 'Product 1',
      category: 'Electronics',
      amount: 10,
      price: 99.99,
    },
    {
      id: 'product2',
      name: 'Product 2',
      category: 'Clothing',
      amount: 20,
      price: 49.99,
    },
  ];

  getProducts(): any {
    return { products: this.products };
  }

  createProduct(productData: any): any {
    const productId = `product${this.products.length + 1}`;

    const newProduct = { id: productId, ...productData };

    this.products.push(newProduct);

    return { message: 'Product created successfully', product: newProduct };
  }
}
