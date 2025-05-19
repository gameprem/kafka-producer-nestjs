import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { KafkaService } from './kafka/kafka.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly kafkaService: KafkaService, // Inject the KafkaService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('send')
  async send(@Body('message') msg: string) {
    await this.kafkaService.sendMessage('test-topic', msg);
    return { status: 'ok' };
  }
}
