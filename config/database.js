import Sequelize from "sequelize";

export const db = new Sequelize('todo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });