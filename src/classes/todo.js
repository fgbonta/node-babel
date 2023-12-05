class Todo {
    constructor(items = []) {
        this.todos = items;
    }
    add(item) {
        if(!this.todos.includes(item)){
            this.todos.push(item);
            return true;
        }
        return false;       
    }
    remove(item) {
        if(this.todos.includes(item)){
            this.todos = this.todos.filter( todo => todo !== item);
            return true;
        }
        return false;       
    }
    getItem(item) {
        const todo = this.todos.find( todo => todo === item);
        return todo ? todo : null;
    }
    get list() {
        return this.todos;
    }
}

export default Todo;