export type State = {
  id: number;
  title: string;
  description: string;
  isFinish: boolean;
};

const initialState = {
  todos: [] as State[],
};

type ToDoAction =
  | {
      type: "ADD";
      data: State;
    }
  | { type: "REMOVE"; id: number }
  | { type: "FETCH_ALL"; data: State[] };

export const toDoReducer = (state = initialState, action: ToDoAction) => {
  switch (action.type) {
    case "ADD":
      return { ...state, todos: [...state.todos, action.data] };

    case "REMOVE":
      return {
        ...state,
        todos: state.todos.filter(
          (todo: { id: number }) => todo.id !== action.id
        ),
      };

    case "FETCH_ALL":
      return {
        ...state,
        todos: action.data,
      };

    default:
      return state;
  }
};
