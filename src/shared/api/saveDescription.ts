import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToDoState } from "../redux/reducers/toDoSlice";

export const saveDescription = createAsyncThunk<
  { id: string; description: string },
  { id: string; description: string },
  { state: { toDo: ToDoState } }
>("saveDescription", async ({ id, description }, thunkApi) => {
  const state = thunkApi.getState().toDo.todos;
  const newToDos = [...state].map((item) =>
    item.id === id ? { ...item, description } : item
  );

  localStorage.setItem("todos", JSON.stringify(newToDos));
  return { id, description };
});
