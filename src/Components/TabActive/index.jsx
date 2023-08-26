import { ListToDoContext } from "../../App";
import AddDetail from "../AddDetail";
import "./style.css";
import { useContext } from "react";
import CheckList from "../CheckList";

function TabActive() {
  const { listToDo } = useContext(ListToDoContext);
  const activeTasks = listToDo.filter((item) => !item.status);

  return (
    <>
      <div className="tab_active">
        <AddDetail />
        <CheckList type={"active"} task={activeTasks} />
      </div>
    </>
  );
}
export default TabActive;
