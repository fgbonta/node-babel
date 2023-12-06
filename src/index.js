import express from "express";
import "dotenv/config";
import helmet from "helmet";
import Todo from "./classes/todo";

const app = express();
const port = process.env.PORT || 3000;
const todos = new Todo();

app.use(helmet());

app.get("/todo", (req, res) => {
  res.status(200).json({ todos: todos.list });
});

app.get("/todo/:item", (req, res) => {
  const { item } = req.params;
  const getStatus = todos.getItem(item);
  res.status(200).json({ todoGet: { getStatus: !!getStatus, item: getStatus ?? "" } });
});

app.post("/todo/:item", (req, res) => {
  const { item } = req.params;
  const addStatus = todos.add(item);
  res.status(200).json({ todoAdd: { addStatus, item } });
});

app.delete("/todo/:item", (req, res) => {
  const { item } = req.params;
  const deleteStatus = todos.remove(item);
  res.status(200).json({ todoRemove: { deleteStatus, item } });
});

app.listen(port, () => { });
