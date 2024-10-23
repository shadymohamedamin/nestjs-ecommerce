import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';


@Controller()
export class AppController {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  @Get('/ping-db')
  async pingDatabase() {
    const state = this.connection.readyState;
    return {
      message: state === 1 ? 'Connected to MongoDB' : 'Not Connected',
      status: state,
    }; 
  }
}

