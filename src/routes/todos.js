import { Router } from "express";
import {
  getTodos, getTodo, addTodo, deleteTodo,
} from "../controllers/todos";

const routerTodos = Router();

routerTodos.get("/", getTodos);
routerTodos.get("/:item", getTodo);
routerTodos.post("/:item", addTodo);
routerTodos.delete("/:item", deleteTodo);

export default routerTodos;
