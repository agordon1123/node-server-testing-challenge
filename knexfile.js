
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/edu-depts.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/edu-depts-test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    }
  }
};
