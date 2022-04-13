// Update with your config settings.
const knexConfig = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      database: 'netflix',
      user:     'root',
      password: 'mauFJcuf5dhRMQrjj'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'migrations',
    },
    useNullAsDefault: true
  },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // }

};

export default knexConfig;
