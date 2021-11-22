import { useState } from "react";
import { BsPlusSquareDotted } from "react-icons/bs";
import styles from "./TodoForm.module.css";
import { useTodosActions } from "./TodoProvider";

const TodoForm = (props) => {
  //
  /** Get Contaxts */

  const todoDispatch = useTodosActions();

  /** Initial Parameters */

  const [todo, setTodo] = useState("");

  /** Initial Methods */

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("please enter a todo");
      document.getElementById("todo_input").focus();
    } else {
      todoDispatch({ type: "add", todo: todo });
      resetHandler();
    }
  };

  const resetHandler = () => {
    setTodo("");
  };

  /** Return Component */

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <div className="input-group mb-3">
        <input
          type="text"
          className={styles.add_todo + " form-control py-3"}
          id="todo_input"
          placeholder="Add Todo"
          value={todo}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-info">
            <span className="d-flex align-items-center">
              <BsPlusSquareDotted size={25} />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
