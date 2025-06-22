import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToDoState } from "../redux/reducers/toDoSlice";

export const saveTitle = createAsyncThunk<
  { id: string; title: string },
  { id: string; title: string },
  { state: { toDo: ToDoState } }
>("saveTitle", async ({ id, title }, thunkApi) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const state = thunkApi.getState().toDo.todos;
  const newToDos = [...state].map((item) =>
    item.id === id ? { ...item, title } : item
  );

  localStorage.setItem("todos", JSON.stringify(newToDos));
  return { id, title };
});
