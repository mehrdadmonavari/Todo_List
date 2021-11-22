import { createContext, useContext, useReducer } from "react";

const initialTodos = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const newTodo = {
        id: Math.ceil(Math.random() * 1000),
        todo: action.todo,
        isCompleted: false,
      }
      return [...state, newTodo];
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
  console.log(todos);
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
