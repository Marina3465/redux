import { applyMiddleware, createStore } from "redux";
import { toDoReducer } from "./toDoReducer";
import { thunk } from "redux-thunk";

export const store = createStore(toDoReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
