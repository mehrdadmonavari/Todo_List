import { useEffect, useRef, useState } from "react";
import { BsBookmarkCheck } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import Todo from "./Todo";
import { useTodos, useTodosActions } from "./TodoProvider";
import styles from "./TodoList.module.css";

const TodoList = () => {
  //
  /** Get Contexts */

  const todos = useTodos();

  const todosDispatch = useTodosActions();

  /** Initial Parameters */

  const [edit, setEdit] = useState({ id: null, name: "", isCompleted: false });

  /** Initioal Methods */

  const editHandler = (todo) => {
    setEdit(todo);
  };

  const resetEdit = () => {
    setEdit({ ...edit, id: null, name: "" });
  };

  const EditTodo = () => {
    todosDispatch({ type: "edit", id: edit.id, name: edit.name });
    resetEdit();
  };

  const renderList = () => {
    if (edit.id) {
      return (
        <div className="input-group">
          <input
            type="text"
            className={styles.edit_todo + " form-control py-1"}
            onChange={(e) => {
              setEdit({ ...edit, name: e.target.value });
            }}
            value={edit.name}
            autoFocus
          />
          <div className="input-group-append">
            <button
              className="pb-2 btn btn-outline-success"
              onClick={() => {
                EditTodo();
              }}
            >
              <BsBookmarkCheck />
            </button>
            <button
              className="pb-2 btn btn-outline-danger"
              onClick={() => {
                resetEdit();
              }}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      );
    } else {
      return todos.map((todo, index) => {
        return (
          <Todo
            key={todo.id}
            index={index}
            todo={todo}
            onChangeStatus={() =>
              todosDispatch({
                type: "changeStatus",
                id: todo.id,
              })
            }
            onEdit={() => {
              editHandler(todo);
            }}
            onDelete={() =>
              todosDispatch({
                type: "delete",
                id: todo.id,
              })
            }
          />
        );
      });
    }
  };

  /** Return Component */

  return (
    <div>
      <ul className="list-group list-group-flush">{renderList()}</ul>
    </div>
  );
};

export default TodoList;
