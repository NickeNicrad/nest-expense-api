import { AppService } from './app.service';
import { Controller } from "@nestjs/common";

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {

  }
}
