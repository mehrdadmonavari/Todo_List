import styles from "./TodoApp.module.css";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoNavBar from "./TodoNavBar";
import TodoProvider from "./TodoProvider";

const TodoApp = () => {
  return (
    <div className="container w-75 d-flex justify-content-center align-items-center p-5">
      <TodoProvider>
        <div className="card w-100">
          <TodoHeader />
          <div className="card-body px-3">
            <TodoNavBar />
            <TodoForm />
            <hr />
            <TodoList />
          </div>
        </div>
      </TodoProvider>
    </div>
  );
};

export default TodoApp;
