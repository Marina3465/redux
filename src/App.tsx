import { Provider } from "react-redux";
import "./App.css";
import { Description } from "./widgets/Description";
import { ToDoList } from "./widgets/ToDoList";
import { store } from "./shared/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: "flex" }}>
        <ToDoList />
        <Description />
      </div>
    </Provider>
  );
}

export default App;
