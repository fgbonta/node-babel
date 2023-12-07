import "dotenv/config";
import { Todo, Server } from "./models";

globalThis.todos = new Todo();
const server = new Server();
server.listen();
