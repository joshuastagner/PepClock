module.exports = {
  'client': 'postgresql',
  'connection': {
    'database': process.env.DB_DATABASE,
    'user': process.env.DB_USER,
    'password': process.env.DB_PASSWORD,      
    'host': process.env.DB_HOST,
    'port': 5432
  },
  'pool': {
    'min': 1,
    'max': 2
  },
  'migrations': {
    'tableName': 'knex_migrations',
    'directory': 'db/migrations'
  },
  "seeds": {
    "directory": "db/seeds"
  }
};
