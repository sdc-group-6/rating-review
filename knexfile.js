module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: 'localhost',
      user: 'postgres',   //default user?
      password: 'newpass',
      port: '5432',
      database: 'reviewsdb' // my pg database
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