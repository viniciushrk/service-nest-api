import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): object {
    return {
      message: this.appService.getHello(),
      statusCode: HttpStatus.OK,
    }
  }
}
