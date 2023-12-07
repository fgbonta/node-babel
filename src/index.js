import express from "express";
import "dotenv/config";
import helmet from "helmet";
import Todo from "./classes/todo";

const app = express();
const port = process.env.PORT || 3000;
const pathItems = {
  todo: "/api/todo",
};
const todos = new Todo();

app.use(helmet());

app.get(pathItems.todo, (req, res) => {
  res.status(200).json({ todos: todos.list });
});

app.get(`${pathItems.todo}/:item`, (req, res) => {
  const { item } = req.params;
  const getStatus = todos.getItem(item);
  res.status(getStatus !== null ? 200 : 404).json({ todoGet: { getStatus: !!getStatus, item: getStatus ?? "" } });
});

app.post(`${pathItems.todo}/:item`, (req, res) => {
  const { item } = req.params;
  const addStatus = todos.add(item);
  res.status(addStatus ? 201 : 400).json({ todoAdd: { addStatus, item } });
});

app.delete(`${pathItems.todo}/:item`, (req, res) => {
  const { item } = req.params;
  const deleteStatus = todos.remove(item);
  res.status(deleteStatus ? 200 : 404).json({ todoRemove: { deleteStatus, item } });
});

app.listen(port, () => { });
