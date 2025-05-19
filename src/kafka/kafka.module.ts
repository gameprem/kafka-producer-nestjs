import { Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';

@Module({
  imports: [],
  controllers: [],
  providers: [KafkaService],
  exports: [KafkaService], // Export the KafkaService to make it available for other modules
})
export class KafkaModule {}
