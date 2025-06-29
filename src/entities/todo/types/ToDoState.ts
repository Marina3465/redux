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
