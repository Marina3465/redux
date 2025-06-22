import { ChangeEvent } from "react";
import "./style.css";

type Props = {
  title: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

export const Checkbox = ({ title, id, onChange, checked }: Props) => {
  return (
    <div className="checkbox-wrapper-15" onClick={(e) => e.stopPropagation()}>
      <input
        className="inp-cbx"
        id={String(id)}
        type="checkbox"
        style={{ display: " none" }}
        onChange={onChange}
        checked={checked}
      />
      <label className="cbx" htmlFor={String(id)}>
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
        <span
          style={{
            textTransform: "uppercase",
            maxWidth: "250px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </span>
      </label>
    </div>
  );
};
