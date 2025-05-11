import { Provider } from "react-redux";
import "./App.css";
import { Description } from "./widgets/Description";
import { List } from "./widgets/List";
import { store } from "./shared/redux/store";

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
