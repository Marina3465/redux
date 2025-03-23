import { useState } from "react";
import { Search } from "../feature/Search";
import { ToDo } from "../feature/ToDo";
import { AddToDo } from "../feature/AddToDo";

export function ToDoList() {
  const [checked, setChecked] = useState(false);
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
        <ToDo checked={checked} onChange={() => setChecked(!checked)} />
      </div>
    </div>
  );
}
