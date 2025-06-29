import { createAsyncThunk } from "@reduxjs/toolkit";
import { State } from "../types/ToDoState";

export const loadTodos = createAsyncThunk<State[]>("loadToDo", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = localStorage.getItem("todos");

  return data ? JSON.parse(data) : [];
});
