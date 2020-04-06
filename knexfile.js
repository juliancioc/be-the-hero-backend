// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      database: 'd75cn5psocfbk1',
      user: 'isvxmkcanotbsj',
      password: '31d08cf77051f8d42fca139372ec5af315bb78b1607560dea8f8b906dfc1e7a'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'd75cn5psocfbk1',
      user: 'isvxmkcanotbsj',
      password: '31d08cf77051f8d42fca139372ec5af315bb78b1607560dea8f8b906dfc1e7a'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'd75cn5psocfbk1',
      user: 'isvxmkcanotbsj',
      password: '31d08cf77051f8d42fca139372ec5af315bb78b1607560dea8f8b906dfc1e7a'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
