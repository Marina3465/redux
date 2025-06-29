import { useState, useEffect } from "react";
import { useAppDispatch } from "../../store";
import { saveTitle } from "../../entities/todo/api/saveTitle";
import styles from "./editableTitle.module.scss";

export function EditableTitle({ title, id }: { title: string; id: string }) {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(title);

  useEffect(() => {
    setValue(title);
  }, [title]);

  const save = () => {
    if (value.trim() !== title) {
      dispatch(saveTitle({ id, title: value.trim() }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={save}
      onKeyDown={handleKeyDown}
      className={styles.input}
    />
  );
}
