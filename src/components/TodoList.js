import Todo from "./Todo";
import { useTodos, useTodosActions } from "./TodoProvider";

const TodoList = () => {
  //
  /** Get Contexts */

  const todos = useTodos();

  const todosDispatch = useTodosActions();

  /** Return Component */

  return (
    <div>
      <ul className="list-group list-group-flush">
        {todos.map((todo, index) => {
          return (
            <Todo
              key={todo.id}
              index={index}
              todo={todo}
              onChangeStatus={() => todosDispatch({
                type: "changeStatus",
                id: todo.id,
              })}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
