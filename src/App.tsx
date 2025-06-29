import { Provider } from "react-redux";
import "./App.css";
import { Description } from "./widgets/description/Description";
import { List } from "./widgets/list/List";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: "flex" }}>
        <List />
        <Description />
      </div>
    </Provider>
  );
}

export default App;
