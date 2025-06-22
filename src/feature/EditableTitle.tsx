import { useState, useEffect } from "react";
import { useAppDispatch } from "../shared/redux/store";
import { saveTitle } from "../shared/api/saveTitle";

export function EditableTitle({ title, id }: { title: string; id: string }) {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(title);

  useEffect(() => {
    setValue(title); // при смене selectedToDo обновляем title
  }, [title]);

  const save = () => {
    if (value.trim() !== title) {
      dispatch(saveTitle({ id, title: value.trim() }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      (e.target as HTMLInputElement).blur(); // чтобы onBlur тоже сработал
    }
  };

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={save}
      onKeyDown={handleKeyDown}
      style={{
        color: "var(--text-color)",
        fontSize: "30px",
        background: "transparent",
        border: "none",
        borderBottom: "1px solid white",
        outline: "none",
        padding: "4px 0",
        marginBottom: "20px",
        // width: "fit-content",
        width: "90%",
      }}
    />
  );
}
