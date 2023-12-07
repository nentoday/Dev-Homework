import { Controller, Patch, Param, Body, ValidationPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeUpdateDto } from './dto/employee-update.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Patch(':employeeId')
  updateEmployee(
    @Param('employeeId') employeeId: string,
    @Body(new ValidationPipe()) employeeUpdateDto: EmployeeUpdateDto,
  ): any {
    return this.employeesService.updateEmployee(employeeId, employeeUpdateDto);
  }
}