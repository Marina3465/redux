import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State } from "./toDoReducer";

type SelectedToDoState = {
  selectedToDo: State | null;
};

const initialState: SelectedToDoState = {
  selectedToDo: null,
};

const selectedToDoSlice = createSlice({
  name: "selectedToDo",
  initialState,
  reducers: {
    selectToDo: (state, action: PayloadAction<State>) => {
      state.selectedToDo = action.payload;
    },
  },
});

export const { selectToDo } = selectedToDoSlice.actions;
export default selectedToDoSlice.reducer;
