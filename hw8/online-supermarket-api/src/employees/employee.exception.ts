import { HttpException, HttpStatus } from '@nestjs/common';

export class EmployeeException extends HttpException {
  constructor(message: string, status: HttpStatus) {
    super({ message, status }, status);
  }
}
