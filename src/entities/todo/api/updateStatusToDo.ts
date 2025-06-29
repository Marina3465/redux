import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToDoState } from "../types/ToDoState";

export const updateStatusToDo = createAsyncThunk<
  {
    id: string;
    status: boolean;
  },
  {
    id: string;
    status: boolean;
  },
  { state: { toDo: ToDoState } }
>("updateStatusToDo", async ({ id, status }, thunkApi) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const state = thunkApi.getState().toDo.todos;
  const updatedToDos = [...state].map((item) =>
    item.id === id ? { ...item, isFinish: status } : item
  );
  localStorage.setItem("todos", JSON.stringify(updatedToDos));
  return { id, status };
});
