import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { RootState, useAppSelector } from "../../store";
import { EmptyDescription } from "../../shared/ui/empty-description/EmptyDescription";
import { saveDescription } from "../../entities/todo/api/saveDescription";
import { useAppDispatch } from "../../store";
import { EditableTitle } from "../../features/title/EditableTitle";
import styles from "./description.module.scss";

export function Description() {
  const dispatch = useAppDispatch();
  const selectedToDo = useAppSelector(
    (state: RootState) => state.toDo.selectedToDo
  );

  const [value, setValue] = useState(selectedToDo?.description || "");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setValue(selectedToDo?.description || "");
  }, [selectedToDo]);

  useEffect(() => {
    if (!selectedToDo) return;

    const timeoutId = setTimeout(() => {
      if (value !== selectedToDo.description) {
        dispatch(
          saveDescription({ id: selectedToDo.id, description: value })
        ).then(() => {
          setIsSaved(true);
          setTimeout(() => setIsSaved(false), 2000);
        });
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [dispatch, selectedToDo, value]);

  return (
    <div className={styles.container}>
      {selectedToDo ? (
        <>
          <div className={styles.header}>
            <EditableTitle title={selectedToDo?.title} id={selectedToDo?.id} />
            {isSaved && <span className={styles.savedText}>Saved</span>}
          </div>
          <MDEditor
            style={{ flex: 1 }}
            value={value}
            onChange={(val) => setValue(val || "")}
          />
        </>
      ) : (
        <EmptyDescription />
      )}
    </div>
  );
}
