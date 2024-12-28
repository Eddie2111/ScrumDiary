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
    debug: true,
    migrations: {
        path: './dist/src/common/db/migrations',
        pathTs: './src/common/db/migrations',
    }
});
