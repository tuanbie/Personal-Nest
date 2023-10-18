export const config = {
  db: {
    type: process.env.DB_TYPE || 'postgres',
    synchronize: false,
    logging: false,
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER || 'username',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'dbname',
    extra: {
      connectionLimit: 1000,
    },
    autoLoadEntities: true,
  },
  foo: 'dev-bar',
};
