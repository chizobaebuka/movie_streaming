import * as fs from 'fs';
import * as path from 'path';
import { Sequelize } from'sequelize';
import { DataTypes } from 'sequelize';
import dotenv from 'dotenv';
import config from '../config/config';
dotenv.config();
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db: any = {};

const currentConfig: any = env == 'development' ? config.development : config.production;

let sequelize: any;

sequelize = new Sequelize(currentConfig.database, currentConfig.username, currentConfig.password, currentConfig);

fs
  .readdirSync(__dirname)
  .filter((file: any) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.ts' &&
      file.indexOf('.test.ts') === -1
    );
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;