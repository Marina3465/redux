import { ChangeEvent, useEffect, useState } from "react";
import { Search } from "../feature/Search";
import { ToDo } from "../feature/ToDo";
import { AddToDo } from "../feature/AddToDo";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../shared/redux/store";
import {
  deleteToDo,
  loadTodos,
  State,
  statusUpdateToDo,
} from "../shared/redux/reducers/toDoReducer";
import { Loading } from "./Loading";

export function List() {
  const todos = useAppSelector((state: RootState) => state.toDo.todos);
  const isLoading = useAppSelector((state: RootState) => state.toDo.loading);

  // const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredTodos, setFilteredTodos] = useState<State[]>(todos);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredTodos(todos);
    } else {
      const filtered = todos.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  }, [todos, search]);

  const handleDelete = (id: number) => {
    dispatch(deleteToDo(id));
  };

  const handleCheckToDo = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      statusUpdateToDo({ id: Number(e.target.id), status: e.target.checked })
    );
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    const filtered = todos.filter((todo) =>
      todo.title.toLowerCase().includes(query)
    );
    setFilteredTodos(filtered);
  };

  return (
    <>
      {" "}
      <div
        style={{
          background: "var(--bg-color)",
          height: "100vh",
          width: "30%",
          padding: "20px",
          borderRight: "1px solid white",
          overflowY: "auto",
          overflowX: "hidden",
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
          {[...filteredTodos].reverse()?.map((todo: State, index: number) => (
            <div
              key={todo.id}
              style={{
                marginBottom: "15px",
                borderBottom:
                  index !== filteredTodos.length - 1
                    ? "1px solid grey"
                    : "none",
                paddingBottom: "15px",
              }}
            >
              <ToDo
                todo={todo}
                checked={todo.isFinish}
                onDelete={() => handleDelete(todo.id)}
                handleCheckToDo={handleCheckToDo}
              />
            </div>
          ))}
        </div>
      </div>
      {isLoading && <Loading />}
    </>
  );
}
