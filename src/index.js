import express from 'express';
import 'dotenv/config';
import Todo from './classes/todo';

const app = express();
const port = process.env.PORT || 3000;
const todos = new Todo();

app.get('/list', (req, res) => {
    res.status(200).json({todos: todos.list});
});

app.get('/add/:item', (req, res) => {
    const item = req.params.item;
    todos.add(item);
    res.status(200).json({todoAdd: item, todos: todos.list});
});

app.get('/remove/:item', (req, res) => {
    const item = req.params.item;
    todos.remove(item);
    res.status(200).json({todoRemove: item, todos: todos.list});
});

app.listen(port, () => {
    console.log(`app[todo] listening on port ${port}`)
});