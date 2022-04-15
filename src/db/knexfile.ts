// import {
//   DB_HOST,
//   DB_PORT,
//   DB_USER,
//   DB_PASSWORD,
//   DB_NAME
// } from '../constanst/env'
// Update with your config settings.
const connection= {
  host: '127.0.0.1',
  port: 33068,
  database: 'netflix',
  user: 'root',
  password: null,

}

const knexConfig = {

  development: {
    client: 'mysql',
    connection,
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
