import express from "express";
import Todo from "../Models/Todo.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todo = await Todo.findAll();
    res.json(todo);

  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {

  try {
    const todo = await Todo.create(req.body);
    res.json(todo);

  } catch (error) {
    console.log(error);
  }
});

router.patch("/:id", async (req, res) => {
    const { id } = req.params
  try {
    const todo = await Todo.findOne({
      where: {
        userId: `${id}`,
      },
      returning: true,
      plain: true,
    });
    await todo.update(req.body);
    res.json(todo);

  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params
  try {
    await Todo.destroy({
      where:{
        id: id
      }
    });
    res.json("Todo deleted");

  } catch (error) {
    console.log(error);
  }
});

export default router;
