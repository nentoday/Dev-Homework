import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private customers = [
    { id: '1', name: 'Customer 1' },
    { id: '2', name: 'Customer 2' },
  ];

  getCustomerOrders(customerId: string): any {
    return { customerId, orders: [] };
  }

  getCustomerById(customerId: string): any {
    return this.customers.find((customer) => customer.id === customerId);
  }
}