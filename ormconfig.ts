import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv';

dotenv.config();

export const DatabaseConfig: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
//     entities: [
//     __dirname + "src/database/entities/*.entity.ts"
//   ]
}

export const AppDataSource = new DataSource({
    ...DatabaseConfig,
    migrations : ['src/database/migrations/*.ts']
  });