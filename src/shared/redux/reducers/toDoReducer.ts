import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export type State = {
  id: number;
  title: string;
  description: string;
  isFinish: boolean;
};

type ToDoState = {
  todos: State[];
  loading: boolean;
};

const initialState: ToDoState = {
  todos: [],
  loading: false,
};

export const loadTodos = createAsyncThunk<State[]>("loadToDo", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = localStorage.getItem("todos");

  return data ? JSON.parse(data) : [];
});

export const addToDo = createAsyncThunk<
  State,
  State,
  { state: { toDo: ToDoState } }
>("addToDo", async (newToDo, thunkApi) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const state = thunkApi.getState().toDo.todos;
  const updatedToDos = [...state, newToDo];
  localStorage.setItem("todos", JSON.stringify(updatedToDos));

  return newToDo;
});

export const deleteToDo = createAsyncThunk<
  number,
  number,
  { state: { toDo: ToDoState } }
>("deleteToDo", async (id, thunkApi) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const state = thunkApi.getState().toDo.todos;
  const updatedToDos = [...state].filter((item) => item.id !== id);

  localStorage.setItem("todos", JSON.stringify(updatedToDos));
  return id;
});

export const statusUpdateToDo = createAsyncThunk<
  {
    id: number;
    status: boolean;
  },
  {
    id: number;
    status: boolean;
  },
  { state: { toDo: ToDoState } }
>("statusUpdateToDo", async ({ id, status }, thunkApi) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const state = thunkApi.getState().toDo.todos;
  const updatedToDos = [...state].map((item) =>
    item.id === id ? { ...item, isFinish: status } : item
  );
  localStorage.setItem("todos", JSON.stringify(updatedToDos));
  return { id, status };
});

const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(loadTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToDo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
        toast.success("Success add!", {
          theme: "dark",
          autoClose: 1000,
        });
      })
      .addCase(addToDo.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteToDo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter((item) => item.id !== action.payload);
        toast.success("Success delete!", {
          theme: "dark",
          autoClose: 2000,
        });
      })
      .addCase(deleteToDo.pending, (state) => {
        state.loading = true;
      })
      .addCase(statusUpdateToDo.fulfilled, (state, action) => {
        const { id, status } = action.payload;
        state.loading = false;
        state.todos = state.todos.map((item) =>
          item.id === id ? { ...item, isFinish: status } : item
        );
        toast.success("Success status update!", {
          theme: "dark",
          autoClose: 2000,
        });
      })
      .addCase(statusUpdateToDo.pending, (state) => {
        state.loading = true;
      });
  },
});

export default toDoSlice.reducer;
