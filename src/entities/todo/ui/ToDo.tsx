import { ChangeEvent, MouseEvent } from "react";
import { selectToDo } from "../model/toDoSlice";
import { Button } from "../../../shared/ui/button/Button";
import { Checkbox } from "../../../shared/ui/checkbox/Checkbox";
import { useAppDispatch } from "../../../store";
import { State } from "../types/ToDoState";
import styles from "./toDo.module.scss";

type Props = {
  checked: boolean;
  todo: State;
  onDelete: () => void;
  handleCheckToDo: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const ToDo = ({ todo, onDelete, handleCheckToDo, checked }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={styles.container}
      onClick={() => {
        dispatch(selectToDo(todo));
      }}
    >
      <Checkbox
        title={todo.title}
        id={todo.id}
        onChange={handleCheckToDo}
        checked={checked}
      />
      <div className={styles.actions}>
        <Button
          type="transparent"
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};
