module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: '127.0.0.1',
      user: 'postgres',   //default user?
      password: '',
      port: '5432',
      database: 'reviews_ratings_db' // my pg database
    },
    seeds: {
      directory: __dirname + "/database/seed"
    }
  }

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     host: process.env.RDS_HOSTNAME,
  //     user: process.env.RDS_USERNAME,
  //     password: process.env.RDS_PASSWORD,
  //     port: process.env.RDS_PORT,
  //     database: process.env.RDS_DB_NAME
  //   },
  //   pool: {
  //     min: 0,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     host: process.env.RDS_HOSTNAME,
  //     user: process.env.RDS_USERNAME,
  //     password: process.env.RDS_PASSWORD,
  //     port: process.env.RDS_PORT,
  //     database: process.env.RDS_DB_NAME
  //   },
  //   pool: {
  //     min: 0,
  //     max: 10
  //   },
  //   migrations: {
  //     directory: __dirname + "/database/seeds"
  //   }
  // }
};