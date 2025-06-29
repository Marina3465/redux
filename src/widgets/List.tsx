import { ChangeEvent, useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { Search } from "../features/search-todo/Search";
import { AddToDo } from "../features/add-todo/AddToDo";
import { ToDo } from "../entities/todo/ui/ToDo";
import { EmptyList, Loading } from "../shared/ui";
import { deleteToDo, loadTodos, updateStatusToDo } from "../entities/todo/api";
import { State } from "../entities/todo/types/ToDoState";

export function List() {
  const todos = useAppSelector((state: RootState) => state.toDo.todos);
  const isLoading = useAppSelector((state: RootState) => state.toDo.loading);

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

  const handleDelete = (id: string) => {
    dispatch(deleteToDo(id));
  };

  const handleCheckToDo = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateStatusToDo({ id: e.target.id, status: e.target.checked }));
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
          {filteredTodos.length !== 0 ? (
            [...filteredTodos].reverse().map((todo: State, index: number) => (
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
            ))
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
      {isLoading && <Loading />}
    </>
  );
}
