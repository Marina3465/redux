import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { loadTodos } from "../../api/loadTodos";
import { addToDo } from "../../api/addToDo";
import { deleteToDo } from "../../api/deleteToDo";
import { statusUpdateToDo } from "../../api/statusUpdateToDo";
import { saveDescription } from "../../api/saveDescription";

export type State = {
  id: string;
  title: string;
  description: string;
  isFinish: boolean;
};

export type ToDoState = {
  todos: State[];
  loading: boolean;
  selectedToDo: State | null;
};

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
      .addCase(addToDo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
        state.selectedToDo = action.payload;
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
        state.selectedToDo = null;
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
      })
      .addCase(saveDescription.fulfilled, (state, action) => {
        const { id, description } = action.payload;

        state.todos = state.todos.map((item) =>
          item.id === id ? { ...item, description } : item
        );

        if (state.selectedToDo?.id === id) {
          state.selectedToDo = { ...state.selectedToDo, description };
        }
      });
  },
});

export const { selectToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
