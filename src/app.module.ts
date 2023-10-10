import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import Dbconfig from './config/dbconfig';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [Dbconfig]
  }),
  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
// import { DatabaseModule } from './config/dbconfig';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule, ConfigService } from '@nestjs/config';


// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true
//     }),
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: process.env.POSTGRES_HOST || '188.166.221.86',
//       port: +process.env.POSTGRES_PORT || 5432,
//       username: process.env.POSTGRES_USER || 'postgres',
//       password: process.env.POSTGRES_PASS || 'englishwing@6868=',
//       database: process.env.POSTGRES_DB || 'postgres',
//       entities: ['src/database/entity/*.entity.ts'],
//       synchronize: true,
//       migrationsRun: true,
//       migrationsTableName: 'migrations',
//       migrations: ["src/migration/*.ts"],
//   }), UserModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
