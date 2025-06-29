import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { loadTodos } from "../api/loadTodos";
import { createToDo } from "../api/createToDo";
import { deleteToDo } from "../api/deleteToDo";
import { updateStatusToDo } from "../api/updateStatusToDo";
import { saveDescription } from "../api/saveDescription";
import { saveTitle } from "../api/saveTitle";
import { State, ToDoState } from "../types/ToDoState";

const initialState: ToDoState = {
  todos: [],
  loading: false,
  selectedToDo: null,
};

const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    selectToDo: (state, action: PayloadAction<State>) => {
      state.selectedToDo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(loadTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(createToDo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
        state.selectedToDo = action.payload;
        toast.success("Success add!", {
          theme: "dark",
          autoClose: 1000,
        });
      })
      .addCase(createToDo.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteToDo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter((item) => item.id !== action.payload);
        state.selectedToDo = null;
        toast.success("Success delete!", {
          theme: "dark",
          autoClose: 2000,
        });
      })
      .addCase(deleteToDo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStatusToDo.fulfilled, (state, action) => {
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
      .addCase(updateStatusToDo.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveDescription.fulfilled, (state, action) => {
        const { id, description } = action.payload;

        state.todos = state.todos.map((item) =>
          item.id === id ? { ...item, description } : item
        );

        if (state.selectedToDo?.id === id) {
          state.selectedToDo = { ...state.selectedToDo, description };
        }
      })
      .addCase(saveTitle.fulfilled, (state, action) => {
        const { id, title } = action.payload;
        state.loading = false;
        state.todos = state.todos.map((item) =>
          item.id === id ? { ...item, title } : item
        );

        if (state.selectedToDo?.id === id) {
          state.selectedToDo = { ...state.selectedToDo, title };
        }
        toast.success("Success title update!", {
          theme: "dark",
          autoClose: 2000,
        });
      })
      .addCase(saveTitle.pending, (state) => {
        state.loading = true;
      });
  },
});

export const { selectToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
