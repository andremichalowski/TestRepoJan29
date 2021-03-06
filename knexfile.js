// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3' // Update db
    },
    useNullAsDefault: true,
  },


  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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


// Test commit for github local time check
// Test commit for github local time check #2
// Test commit for github local time check #3
// Test commit for github local time check #4
// Test commit for github local time check #5

