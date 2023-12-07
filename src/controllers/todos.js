const getTodos = (request, response) => {
  response.status(200).json({ todos: globalThis?.todos.list });
};

const getTodo = (request, response) => {
  const { item } = request.params;
  const getStatus = globalThis?.todos.getItem(item);
  response.status(getStatus !== null ? 200 : 404).json({ todoGet: { getStatus: !!getStatus, item: getStatus ?? "" } });
};

const addTodo = (request, response) => {
  const { item } = request.params;
  const addStatus = globalThis?.todos.add(item);
  response.status(addStatus ? 201 : 400).json({ todoAdd: { addStatus, item } });
};

const deleteTodo = (request, response) => {
  const { item } = request.params;
  const deleteStatus = globalThis?.todos.remove(item);
  response.status(deleteStatus ? 200 : 404).json({ todoRemove: { deleteStatus, item } });
};

export {
  getTodos,
  getTodo,
  addTodo,
  deleteTodo,
};
