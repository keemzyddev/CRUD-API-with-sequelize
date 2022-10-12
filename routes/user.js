import express from "express";
import User from "../Models/User.js";
import Todo from "../Models/Todo.js";

const router = express.Router();

// get all users
router.get("/", async (req, res) => {
  try {
    const todo = await User.findAll({
      include: [
        {
          model: Todo,
        },
      ],
    });
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
});

//  create users
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

// find a single user
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      include: [
        {
          model: Todo,
        },
      ],
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

// update user
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: {
        id: `${id}`,
      },
      returning: true,
      plain: true,
    });
    await user.update(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

// delete user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        id: id,
      },
    });
    res.json("user deleted");
  } catch (error) {
    console.log(error);
  }
});

export default router;
