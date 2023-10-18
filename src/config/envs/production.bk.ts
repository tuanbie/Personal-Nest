export const config = {
  db: {
    type: process.env.DB_TYPE || 'postgres',
    synchronize: false,
    logging: false,
    replication: {
      master: {
        host: process.env.DB_HOST || 'masterHost',
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USER || 'username',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'dbname',
        schema: process.env.DB_SCHEMA || 'auth',
      },
      slaves: [
        {
          // fix if necessary
          host: process.env.DB_HOST_SLAVE || 'slave',
          port: process.env.DB_PORT_SLAVE || 3306,
          username: process.env.DB_USER_SLAVE || 'username',
          password: process.env.DB_PASSWORD_SLAVE || 'password',
          database: process.env.DB_NAME_SLAVE || 'dbname',
          schema: process.env.DB_SCHEMA_SLAVE || 'auth',
        },
      ],
    },
    extra: {
      connectionLimit: 30,
    },
    autoLoadEntities: true,
  },
  graphql: {
    debug: false,
    playground: false,
  },
  foo: 'pro-bar',
};
