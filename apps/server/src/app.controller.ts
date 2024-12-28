import { Controller, Get } from '@nestjs/common';
import { HEALTH_OK_MESSAGE } from './common/constants/app';

@Controller()
export class AppController {
  @Get("health")
  getHealth(): { message: string } {
    return { message: HEALTH_OK_MESSAGE};
  }
}
