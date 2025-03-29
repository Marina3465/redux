import { useState } from "react";
import { Search } from "../feature/Search";
import { ToDo } from "../feature/ToDo";
import { AddToDo } from "../feature/AddToDo";
import { useSelector } from "react-redux";
import { RootState } from "../shared/redux/store";

export function ToDoList() {
  const [checked, setChecked] = useState(false);
  const todos = useSelector((state: RootState) => state.todos);
  // const todos = JSON.parse(localStorage.getItem("todos") || "[]");

  return (
    <div
      style={{
        background: "var(--bg-color)",
        height: "100vh",
        width: "25%",
        padding: "20px",
        borderRight: "1px solid white",
        overflowY: "auto",
      }}
    >
      <Search placeholder="Search note..." />
      <div style={{ margin: "30px 0" }}>
        <AddToDo placeholder="Add TO DO" />
      </div>
      <div style={{ margin: "30px 0" }}>
        {todos?.map((todo, index) => (
          <div
            key={todo.id}
            style={{
              marginBottom: "15px",
              borderBottom:
                index !== todos.length - 1 ? "1px solid grey" : "none",
              paddingBottom: "15px",
            }}
          >
            <ToDo
              name={todo.title}
              checked={todo.isFinish}
              onChange={() => setChecked(!checked)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
