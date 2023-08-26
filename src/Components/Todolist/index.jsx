import React, { useState, useContext } from "react";
import TabAll from "../TabAll";
import "./style.css";
import TabActive from "../TabActive";
import TabCompleted from "../TabCompleted";

function Todolist() {
  const tabs = [
    {
      title: "All",
      content: <TabAll />,
    },
    {
      title: "Active",
      content: <TabActive />,
    },
    {
      title: "Completed",
      content: <TabCompleted />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="todolist">
        <div className="todolist-buttons">
          <div className="todolist-border">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={activeTab === index ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="todolist-content">{tabs[activeTab].content}</div>
        </div>
      </div>
    </>
  );
}

export default Todolist;
