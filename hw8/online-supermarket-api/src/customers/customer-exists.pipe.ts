import { PipeTransform, Injectable } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerNotFoundException } from './customer-not-found.exception';

@Injectable()
export class CustomerExistsPipe implements PipeTransform<string> {
  constructor(private readonly customersService: CustomersService) {}

  async transform(value: string): Promise<string> {
    const customer = this.customersService.getCustomerById(value);

    if (!customer) {
      throw new CustomerNotFoundException(value);
    }

    return value;
  }
}
