import { BeatLoading } from "respinner";

export function Loading() {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "999",
        top: "0",
        right: "0",
        width: "100vw",
        height: "100vh",
        background: "#0000007b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BeatLoading fill="white" />
    </div>
  );
}
