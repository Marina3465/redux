type State = {
  id: number;
  title: string;
  description: string;
  isFinish: boolean;
};

const initialState = { todos: [] as State[] };

type ToDoAction =
  | {
      type: "ADD";
      data: {
        id: number;
        title: string;
        description: string;
        isFinish: boolean;
      };
    }
  | { type: "REMOVE"; id: number };

export const toDoReducer = (state = initialState, action: ToDoAction) => {
  switch (action.type) {
    case "ADD":
      return { ...state, todos: [...state.todos, action.data] };

    case "REMOVE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };

    default:
      return state;
  }
};
