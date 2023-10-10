// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) => ({
//         type: 'postgres',
//         host: process.env.POSTGRES_HOST || '188.166.221.86',
//         port: +process.env.POSTGRES_PORT || 5432,
//         username: process.env.POSTGRES_USER || 'postgres',
//         password: process.env.POSTGRES_PASS || 'englishwing@6868=',
//         database: process.env.POSTGRES_DB || 'postgres',
//         entities: ['../database/entity/*.entity.ts'],
//         synchronize: true,
//         migrations: ['../migrations/*.{ts,js}'],
//         migrationsRun:true,
//         migrationsTableName:'migrations'
//       }),
//     }),
//   ],
// })
// export class DatabaseModule { }

import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: '.env' });

const config = {
    type: 'postgres',
    host: `${process.env.POSTGRES_HOST}`,
    port: `${process.env.POSTGRES_PORT}`,
    username: `${process.env.POSTGRES_USER}`,
    password: `${process.env.POSTGRES_PASS}`,
    database: `${process.env.POSTGRES_DB}`,
    entities: [`${__dirname}/../modules/*/*.entity{.ts,.js}`],
    migrations: [`${__dirname}/../migrations/*{.ts,.js}`],// src/migrations/*{.ts,.js}
    autoLoadEntities: true,
    migrationsTableName: 'migrations',
    synchronize: false,
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);