import { ChangeEvent, useEffect, useState } from "react";
import { Search } from "../feature/Search";
import { ToDo } from "../feature/ToDo";
import { AddToDo } from "../feature/AddToDo";
import { useSelector } from "react-redux";
import { RootState } from "../shared/redux/store";
import { State } from "../shared/redux/toDoReducer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export function ToDoList() {
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<State[]>();

  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(todos);
  }, [todos]);

  const handleDelete = (id: number) => {
    dispatch({
      type: "REMOVE",
      id,
    });
    toast.success("Success delete!", {
      theme: "dark",
    });
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    const filtered = todos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(query) ||
        todo.description.toLowerCase().includes(query)
    );

    setData(filtered);
  };

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
      <Search
        placeholder="Search note..."
        value={search}
        onChange={handleSearch}
      />
      <div style={{ margin: "30px 0" }}>
        <AddToDo placeholder="Add TO DO" />
      </div>
      <div style={{ margin: "30px 0" }}>
        {data?.map((todo: State, index: number) => (
          <div
            key={todo.id}
            style={{
              marginBottom: "15px",
              borderBottom:
                index !== data.length - 1 ? "1px solid grey" : "none",
              paddingBottom: "15px",
            }}
          >
            <ToDo
              todo={todo}
              checked={todo.isFinish}
              onChange={() => setChecked(!checked)}
              onDelete={() => handleDelete(todo.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
