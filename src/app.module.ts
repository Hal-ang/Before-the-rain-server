import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Clothes } from './clothes/clothes.entity';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { Survey } from './surveys/survey.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { Weather } from './weathers/weather.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development', '.env.production'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'before_the_rain',
      entities: [User, Survey, Clothes, Weather],
      // TODO : prod 배포 전 변경하기
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
