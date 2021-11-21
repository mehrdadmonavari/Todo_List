import { BsPlusSquareDotted } from "react-icons/bs";

const TodoForm = (props) => {
  /** Return Component */

  return (
    <div className="form-group row">
      <div className="col-md-5">
        <label className="">new todo</label>
        <input className="form-control" />
      </div>
      <div className="col-md-3 mt-3">
        <button type="submit" className="btn btn-info mt-3">
          <span className="mr-3">add</span>
          <BsPlusSquareDotted size={25} />
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
