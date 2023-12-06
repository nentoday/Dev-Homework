import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders = [
    {
      id: 'order1',
      customerId: '1',
      products: ['product1', 'product2'],
      orderDate: '2023-01-01',
    },
    {
      id: 'order2',
      customerId: '1',
      products: ['product3'],
      orderDate: '2023-01-02',
    },
    {
      id: 'order3',
      customerId: '2',
      products: ['product4'],
      orderDate: '2023-01-03',
    },
  ];

  getOrders(customerId: string): any {
    const customerOrders = this.orders.filter(
      (order) => order.customerId === customerId,
    );
    return { customerId, orders: customerOrders };
  }

  deleteOrder(orderId: string): any {
    const index = this.orders.findIndex((order) => order.id === orderId);

    if (index === -1) {
      throw new NotFoundException(`Order with ID ${orderId} not found`);
    }

    const deletedOrder = this.orders.splice(index, 1)[0];
    return { message: 'Order deleted successfully', deletedOrder };
  }
}
