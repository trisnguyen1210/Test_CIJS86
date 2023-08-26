import { useContext, useState } from "react";
import "./style.css";
import { ListToDoContext } from "../../App";

function AddDetail() {
  const { listToDo, setListToDo, updatedListToDo } =
    useContext(ListToDoContext);
  const [newTask, setNewTask] = useState("");
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleAddTask = (listToDo, setListToDo) => {
    const newTaskText = newTask.trim();
    if (newTaskText !== "") {
      const newTodo = {
        id: listToDo.length + 1,
        info: newTaskText,
        status: false,
      };
      setListToDo([...listToDo, newTodo]);
      setNewTask("");
      updatedListToDo([...listToDo, newTodo]);
    }
  };

  return (
    <>
      <div className="input_task">
        <input
          type="text"
          placeholder="add detail"
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={() => handleAddTask(listToDo, setListToDo)}>
          Add
        </button>
      </div>
    </>
  );
}

export default AddDetail;
