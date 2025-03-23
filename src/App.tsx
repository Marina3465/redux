import "./App.css";
import { Description } from "./widgets/Description";
import { ToDoList } from "./widgets/ToDoList";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <ToDoList />
      <Description />
    </div>
  );
}

export default App;
