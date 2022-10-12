import express from "express";
import mysql2 from "mysql2";
import Sequelize from "sequelize";
import { db } from "./config/database.js"
import todoRouter from "./routes/todo.js"
import userRouter from "./routes/user.js"

//test db
db.authenticate()
  .then(()=> console.log('Connection has been established successfully...'))
  .catch((err)=>console.log('Unable to connect to the database:', err))

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

app.use("/todo", todoRouter)
app.use("/user", userRouter)

app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));
