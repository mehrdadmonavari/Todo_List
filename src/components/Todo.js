import { useTodos, useTodosActions } from "./TodoProvider";
import {
  BsSquare,
  BsCheck2Square,
  BsCircle,
  BsCheck2Circle,
  BsXCircle,
  BsPencilSquare,
} from "react-icons/bs";
import { useState } from "react";

const Todo = (props) => {
  //
  /** Initial Parameters */

  const { index, todo, onEdit, onDelete, onChangeStatus } = props;

  /** Initial Methods */

  const createIcone = () => {
    return todo.isCompleted ? (
      <BsCheck2Circle size={26} color={"green"} />
    ) : (
      <BsCircle size={22} color={"#545454"} style={{ margin: "2px" }} />
    );
  };

  /** Return Component */

  return (
    <li className="list-group-item d-flex justify-content-lg-between">
      <div className="d-flex justify-content-lg-start">
        <div className="mr-4">{index}.</div>
        <div>{todo.name}</div>
      </div>
      <div>
        <button className="btn p-0 mx-2" onClick={onDelete}>
          <BsXCircle size={24} color={"#f7113a"} />
        </button>
        <button className="btn p-0 mx-2" onClick={onEdit}>
          <BsPencilSquare size={24} color={"#0783f7"} />
        </button>
        <button className="btn p-0 mx-2" onClick={onChangeStatus}>
          {createIcone()}
        </button>
      </div>
    </li>
  );
};

export default Todo;
