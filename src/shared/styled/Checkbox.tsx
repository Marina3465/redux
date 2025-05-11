import "./style.css";

export const Checkbox = ({ title, id }: { title: string; id: number }) => {
  return (
    <div className="checkbox-wrapper-15">
      <input
        className="inp-cbx"
        id={String(id)}
        type="checkbox"
        style={{ display: " none" }}
      />
      <label className="cbx" htmlFor={String(id)}>
        <span>
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
        <span>{title}</span>
      </label>
    </div>
  );
};
