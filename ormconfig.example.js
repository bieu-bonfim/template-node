require("dotenv/config");

const devConfig = {
  name: 'default',
  type: 'mysql',
  host: '167.99.114.5',
  port: 3306,
  username: 'wsagency_dev',
  password: 'edfoxac10',
  database: 'wsagency_dev',
  entities: [
    './src/modules/**/infra/typeorm/entities/*.ts'
  ],
  migrations: [
    './src/shared/infra/typeorm/migrations/*.ts'
  ],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};

const prodConfig = {
  name: 'default',
  type: 'mysql',
  host: '167.99.114.5',
  port: 3306,
  username: 'wsagency_dev',
  password: 'edfoxac10',
  database: 'wsagency_dev',
  entities: [
    './dist/modules/**/infra/typeorm/entities/*.js'
  ],
  migrations: [
    './dist/shared/infra/typeorm/migrations/*.js'
  ],
  cli: {
    migrationsDir: './dist/shared/infra/typeorm/migrations',
  },
};

module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
