import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class KafkaService implements OnModuleInit {
  private kafka = new Kafka({ brokers: ['localhost:29092'] });
  private producer = this.kafka.producer();

  async onModuleInit() {
    await this.producer.connect();
  }

  async sendMessage(topic: string, message: string) {
    await this.producer.send({
      topic,
      messages: [
        { key: 'order-123', value: 'payment_started' },
        { key: 'order-123', value: 'payment_confirmed' },
      ],
    });
    console.log('📤 Sent:', message);
  }
}
