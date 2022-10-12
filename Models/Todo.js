import Sequelize from "sequelize";
import { db } from "../config/database.js";
import User from "./User.js";

const Todo = db.define("todo", {
  todoId: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },

  title: {
    type: Sequelize.STRING,
  },

  reminder: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  userId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    references: {
      model: User,
      key: "id",
    },
  },
});
// Todo.drop();
User.hasMany(Todo, { onDelete: "cascade" });
Todo.belongsTo(User);
// Todo.sync({ alter: true });

export default Todo;
