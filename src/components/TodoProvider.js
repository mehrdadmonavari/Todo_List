import { createContext, useContext, useReducer } from "react";

const initialTodos = [
  { id: 50, name: "Breakfast", isCompleted: true },
  { id: 60, name: "Sport", isCompleted: true },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const newTodo = {
        id: Math.ceil(Math.random() * 1000),
        name: action.todo,
        isCompleted: false,
      };
      return [...state, newTodo];
    }
    case "changeStatus": {
      const index = state.findIndex((todo) => {
        return todo.id === action.id;
      });
      const todos = [...state];
      let todo = { ...todos[index] };
      todo.isCompleted = !todo.isCompleted;
      todos[index] = todo;
      return todos;
    }
    default:
      return state;
  }
};

/** Initial Contexts */

const TodoContext = createContext();

const TodoContextDispatcher = createContext();

const TodoProvider = ({ children }) => {
  //
  /** Initial Parametters */

  const [todos, todoDispatch] = useReducer(reducer, initialTodos);

  /** Return Component */

  return (
    <TodoContext.Provider value={todos}>
      <TodoContextDispatcher.Provider value={todoDispatch}>
        {children}
      </TodoContextDispatcher.Provider>
    </TodoContext.Provider>
  );
};

export default TodoProvider;

/** Named Exports */

export const useTodos = () => {
  return useContext(TodoContext);
};

export const useTodosActions = () => {
  return useContext(TodoContextDispatcher);
};
