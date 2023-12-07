import { HttpStatus, Injectable } from '@nestjs/common';
import { EmployeeException } from './employee.exception';
import { EmployeeUpdateDto } from './dto/employee-update.dto';

@Injectable()
export class EmployeesService {
  private employees = [
    { id: '1', firstName: 'John', lastName: 'Doe', position: 'Manager' },
    { id: '2', firstName: 'Jane', lastName: 'Smith', position: 'Developer' },
  ];

  updateEmployee(employeeId: string, data: EmployeeUpdateDto): any {
    const employee = this.employees.find((emp) => emp.id === employeeId);
    if (employee) {
      Object.assign(employee, data);
      return employee;
    } else {
      throw new EmployeeException(
        `Employee with ID ${employeeId} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}