const reducerFn = (state, action) => {
  if (action.type === "ADD") {
    const newTodo = {
      title: action.payload.title,
      isPinned: action.payload.isPinned,
      isChecked: false,
      id: Math.floor(Math.random() * 10000 + 1),
    };
    const newTodos = [...state.todos, newTodo];
    return { todos: newTodos, id: state.id };
  }
  if (action.type === "LOCAL") {
    const newTodos = action.payload;
    return { todos: newTodos, id: state.id };
  }
  if (action.type === "ISCHECKED") {
    const newTodos = state.todos.map((todo) => {
      return todo.id === action.payload
        ? { ...todo, isChecked: !todo.isChecked }
        : todo;
    });
    return { todos: newTodos, id: state.id };
  }
  if (action.type === "ID") {
    const newId = action.payload;
    return { todos: state.todos, id: newId };
  }
  if (action.type === "DELETE") {
    const newTodos = state.todos.filter((todo) => todo.id !== state.id);
    return { todos: newTodos, id: state.id };
  }
  if (action.type === "PIN") {
    const newTodos = state.todos.map((todo) =>
      todo.id === state.id ? { ...todo, isPinned: !todo.isPinned } : todo
    );

    return { todos: newTodos, id: state.id };
  }
  if(action.type === 'UPDATE') {
    const newTodos = state.todos.map(todo => todo.id === state.id ? {...todo, title: action.payload.title, isPinned: action.payload.isPinned} : todo)

    return { todos: newTodos, id: state.id}
  }
  
  return { todos: [], id: null };
};

export default reducerFn;
