import { useContext } from "react";
import "./style.css";
import { ListToDoContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CheckList(props) {
  const { task, type } = props;
  const { listToDo, setListToDo, updatedListToDo } =
    useContext(ListToDoContext);

  const handleCheckboxChange = (id) => {
    // Hàm xử lý sự kiện thay đổi checkbox
    const changeListToDo = listToDo.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status }; // Thay đổi trạng thái
      }
      return item;
    });
    setListToDo(changeListToDo); // Cập nhật trạng thái
    updatedListToDo(changeListToDo);
  };
  const handleDelete = (id) => {
    const changeListToDo = listToDo.filter((item) => item.id !== id);
    setListToDo(changeListToDo);
    updatedListToDo(changeListToDo);
  };

  return (
    <>
      <div className="tab_all">
        <div className="item_task">
          {task.map((item) => (
              <div key={item.id}>
                <div>
                  <input
                    type="checkbox"
                    id={`todo-${item.id}`}
                    checked={item.status}
                    onChange={() => handleCheckboxChange(item.id)} // Xử lý sự kiện thay đổi
                  />
                  <label
                    htmlFor={`todo-${item.id}`}
                    style={
                      item.status
                        ? { textDecoration: "line-through" }
                        : { textDecoration: "none" }
                    }
                  >
                    {item.info}
                  </label>
                </div>
                {type === "completed" ? (
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="delete-icon"
                    onClick={() => handleDelete(item.id)}
                  />
                ) : (
                  <></>
                )}
              </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default CheckList;
