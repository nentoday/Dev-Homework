import { Controller, Get, Param, UsePipes } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerExistsPipe } from './customer-exists.pipe';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get(':customerId/orders')
  @UsePipes(CustomerExistsPipe)
  getCustomerOrders(@Param('customerId') customerId: string): any {
    return this.customersService.getCustomerOrders(customerId);
  }
}
