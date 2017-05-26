module.exports = {
  'client': 'postgresql',
  'connection': {
    'database': process.env.DB_DATABASE,
    'user': process.env.DB_USER,
    'password': process.env.DB_PASSWORD,      
    'host': process.env.DB_HOST,
    'port': 5432
  },
<<<<<<< HEAD
  'pool': {
    'min': 1,
    'max': 2
  },
  'migrations': {
    'tableName': 'knex_migrations',
    'directory': 'db/migrations'
  },
  'seeds': {
    'directory': 'db/seeds'
=======
  "pool": {
    "min": 1,
    "max": 10
  },
  "migrations": {
    "tableName": "knex_migrations",
    "directory": "db/migrations"
  },
  "seeds": {
    "directory": "db/seeds"
>>>>>>> Add additional params that I deleted while refactoring to dotenv
  }
};
