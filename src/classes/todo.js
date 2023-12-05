class Todo {
    constructor(items = []) {
        this.todos = items;
    }
    add(item) {
        if(!this.todos.includes(item)){
            this.todos.push(item);
        }       
    }
    remove(item) {
        if(this.todos.includes(item)){
            this.todos = this.todos.filter( todo => todo !== item);
        }       
    }
    get list() {
        return this.todos;
    }
}

export default Todo;