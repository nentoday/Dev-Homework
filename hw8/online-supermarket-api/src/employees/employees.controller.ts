import { Controller, Patch, Param, Body } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Patch(':employeeId')
  updateEmployee(
    @Param('employeeId') employeeId: string,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('middleName') middleName: string,
    @Body('position') position: string,
  ): any {
    return this.employeesService.updateEmployee(employeeId, {
      firstName,
      lastName,
      middleName,
      position,
    });
  }
}
