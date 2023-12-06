import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class EmployeesService {
  private employees = [
    { id: '1', firstName: 'John', lastName: 'Doe', position: 'Manager' },
    { id: '2', firstName: 'Jane', lastName: 'Smith', position: 'Developer' },
    // Add more employee data as needed
  ];

  updateEmployee(employeeId: string, data: any): any {
    // Implement logic to update employee
    const employee = this.employees.find((emp) => emp.id === employeeId);
    if (employee) {
      Object.assign(employee, data);
      return employee;
    } else {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }
  }
}
