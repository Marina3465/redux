import { MouseEvent } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

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
        type === "origin" && styles["styled-button"],
        type === "transparent" && styles["transparent-button"]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
