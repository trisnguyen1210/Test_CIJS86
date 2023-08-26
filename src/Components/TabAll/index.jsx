import { useContext } from "react";
import "./style.css";
import { ListToDoContext } from "../../App";
import AddDetail from "../AddDetail";
import CheckList from "../CheckList";

function TabAll() {
  const { listToDo } = useContext(ListToDoContext);

  return (
    <>
      <div className="tab_all">
        <AddDetail />
        <CheckList type={"all"} task={listToDo} />
      </div>
    </>
  );
}
export default TabAll;
