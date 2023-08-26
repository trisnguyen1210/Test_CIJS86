import Header from "./Components/Header";
import "./App.css";
import { createContext, useState, useEffect } from "react";
import Todolist from "./Components/Todolist";

export const ListToDoContext = createContext();

function App() {
  const [listToDo, setListToDo] = useState([
    {
      id: 1,
      info: "Do something 1",
      status: false,
    },
    {
      id: 2,
      info: "Do something 2",
      status: false,
    },
    {
      id: 3,
      info: "Do something 3",
      status: true,
    },
  ]);

  function updatedListToDo(listToDo) {
    localStorage.setItem("listToDo", JSON.stringify(listToDo));
  }

  useEffect(() => {
    const storedList = localStorage.getItem("listToDo");
    if (storedList) {
      setListToDo(JSON.parse(storedList));
    }
  }, []);

  return (
    <>
      <ListToDoContext.Provider
        value={{ listToDo, setListToDo, updatedListToDo }}
      >
        <Header />
        <Todolist />
      </ListToDoContext.Provider>
    </>
  );
}

export default App;
