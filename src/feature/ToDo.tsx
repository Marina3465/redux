import { State } from "../shared/redux/toDoReducer";
import {
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
} from "../shared/styled/Checkbox";
import { Title } from "../shared/styled/Title";
import Button from "./Button";

type Props = {
  checked: boolean;
  onChange: () => void;
  todo: State;
  onDelete: () => void;
};

export const ToDo = ({ checked, onChange, todo, onDelete }: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <CheckboxWrapper>
        <HiddenCheckbox checked={checked} onChange={onChange} />
        <StyledCheckbox checked={checked} />
        <Title checked={checked}>{todo.title}</Title>
      </CheckboxWrapper>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Button onClick={() => console.log("edit")}>
          <img src="/edit.svg" alt="" />
        </Button>
        <Button onClick={onDelete}>
          <img src="/trash.svg" alt="" />
        </Button>
      </div>
    </div>
  );
};
