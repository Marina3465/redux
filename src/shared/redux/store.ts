import { createStore } from "redux";
import { toDoReducer } from "./toDoReducer";

export const store = createStore(toDoReducer);

export type RootState = ReturnType<typeof store.getState>;
