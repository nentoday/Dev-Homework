import { Controller, Get, Param } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get(':customerId/orders')
  getCustomerOrders(@Param('customerId') customerId: string): any {
    return this.customersService.getCustomerOrders(customerId);
  }
}
