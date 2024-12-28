import { defineConfig } from '@mikro-orm/postgresql';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

export default defineConfig({
    driver: PostgreSqlDriver,
    dbName: 'test',
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    entities: ['./dist/**/*.entity.js'],
    entitiesTs: ['./src/**/*.entity.ts'],
    debug: true, // Enable debug mode to log discovered entities
});
