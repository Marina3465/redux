import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { RootState, useAppSelector } from "../shared/redux/store";
import { EmptyDescription } from "./EmptyDescription";
import { saveDescription } from "../shared/api/saveDescription";
import { useAppDispatch } from "../shared/redux/store";

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
    <div
      style={{
        background: "var(--bg-color)",
        height: "100vh",
        width: "70%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            color: "var(--text-color)",
            fontSize: "30px",
          }}
        >
          {selectedToDo?.title}
        </h1>
        {isSaved && (
          <span
            style={{
              color: "var(--text-color-after)",
              fontSize: "18px",
              marginLeft: "30px",
            }}
          >
            Saved
          </span>
        )}
      </div>
      {selectedToDo ? (
        <MDEditor
          style={{ flex: 1 }}
          value={value}
          onChange={(val) => setValue(val || "")}
        />
      ) : (
        <EmptyDescription />
      )}
    </div>
  );
}
