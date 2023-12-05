import express from 'express';
import 'dotenv/config';
import Todo from './classes/todo';

const app = express();
const port = process.env.PORT || 3000;
const todos = new Todo();

app.get('/list', (req, res) => {
    res.send(`todo list, ${JSON.stringify(todos.list,null,2)}`);
});

app.get('/add/:item', (req, res) => {
    const item = req.params.item;
    todos.add(item);
    res.send(`todo add ${item}, ${JSON.stringify(todos.list,null,2)}`);
});

app.get('/remove/:item', (req, res) => {
    const item = req.params.item;
    todos.remove(item);
    res.send(`todo remove ${item}, ${JSON.stringify(todos.list,null,2)}`);
});

app.listen(port, () => {
    console.log(`app[todo] listening on port ${port}`)
});