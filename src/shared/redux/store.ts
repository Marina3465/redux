import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import toDoReducer from "./reducers/toDoReducer";
import selectedToDoReducer from "./reducers/selectToDoReducer";

export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
    selectedToDo: selectedToDoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
