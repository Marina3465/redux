import { createAsyncThunk } from "@reduxjs/toolkit";
import { State, ToDoState } from "../types/ToDoState";

export const createToDo = createAsyncThunk<
  State,
  State,
  { state: { toDo: ToDoState } }
>("createToDo", async (newToDo, thunkApi) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const state = thunkApi.getState().toDo.todos;
  const updatedToDos = [...state, newToDo];
  localStorage.setItem("todos", JSON.stringify(updatedToDos));

  return newToDo;
});
