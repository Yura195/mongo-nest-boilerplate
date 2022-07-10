import { mongooseConfig } from './config/mongoose.config';
import { config } from './config/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(config),
    MongooseModule.forRootAsync(mongooseConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
