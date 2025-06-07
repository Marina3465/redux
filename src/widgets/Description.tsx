import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { RootState, useAppSelector } from "../shared/redux/store";

export function Description() {
  const todo = useAppSelector(
    (state: RootState) => state.selectedToDo.selectedToDo
  );
  const [value, setValue] = useState(todo?.description);

  console.log(todo);

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
      {todo ? (
        <MDEditor
          style={{ flex: 1 }}
          value={value}
          onChange={(val) => setValue(val || "")}
        />
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "var(--text-color-after)",
            textAlign: "center",
            gap: "40px",
          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "600",
              margin: 0,
            }}
          >
            Choose the TO DO
          </p>
          <div style={{ marginTop: "10px", width: "300px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              style={{ width: "100%", height: "auto" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
