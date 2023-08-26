import { useContext } from "react";
import "./style.css";
import { ListToDoContext } from "../../App";
import CheckList from "../CheckList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TabCompleted() {
  const { listToDo, setListToDo, updatedListToDo } =
    useContext(ListToDoContext);
  const completedList = listToDo.filter((item) => item.status === true);
  const clearListDone = () => {
    const uncompletedList = listToDo.filter((item) => !item.status);
    setListToDo(uncompletedList);
    updatedListToDo(uncompletedList);
  };

  return (
    <>
      <div className="tab_completed">
        <CheckList type={"completed"} task={completedList} />
      </div>
      <div className="reset_all">
        <button onClick={clearListDone}>
          <FontAwesomeIcon
            icon={faTrash}
            className="delete-icon"
            onClick={() => handleDelete(item.id)}
          />
          Delete All
        </button>
      </div>
    </>
  );
}
export default TabCompleted;
