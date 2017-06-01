# Project Name

The project description

## Team

- Aaron Xavier
- Alex Matranga
- Eric Pan
- Josh Stagner

## Roadmap

View the project roadmap [here](https://trello.com/b/RdOarHS9/project-plasma)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)

## Usage

> Some usage instructions

## Requirements

- Node 6.9.x
- Redis 3.2.x
- Postgresql 9.6.x
- etc

## Development

### Installing System Dependencies

```
brew install yarn
brew install redis
brew install postgresql
```

Yarn is a replacement for npm. It's faster and *guarantees* consistency -- as you deploy your code in various environments, you won't run the risk of slight variations in what gets installed.

### Install Project Dependencies

```
yarn global add grunt-cli knex eslint
```

## Database Initialization

IMPORTANT: ensure `postgres` is running before performing these steps.

### Database Creation:

create a new database for your development and test environments:

Development envronment: `createdb YOUR_DEVEL_DATABASE`

Other environments, specify like so: `createdb testing_db`

### Run Migrations & Data Seeds

In terminal, from the root directory:

`export NODE_ENV=development && knex migrate:latest`

`export NODE_ENV=development knex migrate:rollback`

`export NODE_ENV=development && knex seed:run`

`export NODE_ENV=test && knex migrate:latest`

`Heroku run knex migrate:latest --app pepclock-staging`

Note: `--env NODE_ENV` may be omitted for development. For example, `knex migrate:latest` will run all migrations in the development environment, while `export NODE_ENV=development && knex migrate:latest` will migrate in the test environment.

## Running the App

To run webpack build: `yarn run build`

To run server: `yarn run start:dev`

To run tests: `yarn run test`

To run your redis server for the session store `redis-server`


