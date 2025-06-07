// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import toDoReducer from "./reducers/toDoReducer";

export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
  // `thunk` идёт по умолчанию, но можно явно указать middleware при необходимости
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
