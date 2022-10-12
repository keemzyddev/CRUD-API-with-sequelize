import Sequelize from "sequelize";
import { db } from "../config/database.js";
import Todo from "./Todo.js";

const User = db.define("user", {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },

  username: {
    type: Sequelize.STRING,
  },

  password: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

// User.drop();
// User.sync();
export default User;
