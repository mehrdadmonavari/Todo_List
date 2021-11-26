import { Fragment } from "react";
import { useTodos, useTodosActions } from "./TodoProvider";
import styles from "./TodoNavBar.module.css";

const TodoNavBar = () => {
  //
  /** Get Contexts */

  const todos = useTodos();

  const todoDispatch = useTodosActions();

  /** Initial Methods */

  const renderNavBar = () => {
    if (todos.length !== 0) {
      const completedTodos = todos.filter((todo) => {
        return todo.isCompleted === true && todo;
      });
      return (
        <div
          className={styles.header_text + " text-center justify-content-center"}
        >
          <span className="badge badge-pill badge-secondary ">
            {completedTodos.length}
          </span>
          <span>Todo Are Completed</span>
        </div>
      );
    } else {
      return (
        <div
          className={styles.header_text + " text-center justify-content-center"}
        >
          Add Your Today Todo !
        </div>
      );
    }
  };

  return <div className="mb-3">{renderNavBar()}</div>;
};

export default TodoNavBar;
