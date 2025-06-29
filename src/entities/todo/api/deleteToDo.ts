import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToDoState } from "../types/ToDoState";

export const deleteToDo = createAsyncThunk<
  string,
  string,
  { state: { toDo: ToDoState } }
>("deleteToDo", async (id, thunkApi) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const state = thunkApi.getState().toDo.todos;
  const updatedToDos = [...state].filter((item) => item.id !== id);

  localStorage.setItem("todos", JSON.stringify(updatedToDos));
  return id;
});
