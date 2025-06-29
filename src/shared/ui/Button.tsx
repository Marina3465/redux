import { MouseEvent } from "react";
import cn from "classnames";
import "./style.css";

export const Button = ({
  children,
  onClick,
  type = "origin",
}: {
  children: React.ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "origin" | "transparent";
}) => {
  return (
    <button
      className={cn(
        type === "origin" && "styled-button",
        type === "transparent" && "transparent-button"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
