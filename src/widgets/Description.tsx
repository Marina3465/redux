import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export function Description() {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div
      style={{
        background: "var(--bg-color)",
        height: "100vh",
        width: "75%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MDEditor
        style={{ flex: 1 }}
        value={value}
        onChange={(val) => setValue(val || "")}
      />
    </div>
  );
}
