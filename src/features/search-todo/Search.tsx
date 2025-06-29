import { ChangeEvent } from "react";
import styles from "./search.module.scss";

type Props = {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Search = ({ placeholder, value, onChange }: Props) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
