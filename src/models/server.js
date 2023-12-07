import express from "express";
import cors from "cors";
import helmet from "helmet";
import routerTodos from "../routes/todos";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.paths = {
      todos: "/api/todo",
    };
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.todos, routerTodos);
  }

  listen() {
    this.app.listen(this.port, () => { });
  }
}

export default Server;
