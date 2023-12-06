import { Controller, Get, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get(':customerId')
  getOrders(@Param('customerId') customerId: string): any {
    return this.ordersService.getOrders(customerId);
  }

  @Delete(':orderId')
  deleteOrder(@Param('orderId') orderId: string): any {
    return this.ordersService.deleteOrder(orderId);
  }
}
