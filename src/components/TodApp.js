import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoProvider from "./TodoProvider";

const TodoApp = () => {
  return (
    <div className="container w-75 d-flex justify-content-center align-items-center p-5">
      <TodoProvider>
        <div className="card w-100">
          <TodoHeader />
          <div className="card-body px-3">
            <TodoForm />
          </div>
        </div>
      </TodoProvider>
    </div>
  );
};

export default TodoApp;
