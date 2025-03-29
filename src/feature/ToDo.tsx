import styled from "styled-components";

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.span<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  transition: all 0.2s;
  background: ${({ checked }) =>
    checked ? "var(--primary-color)" : "transparent"};

  &::after {
    content: "✔";
    color: white;
    font-size: 14px;
    display: ${({ checked }) => (checked ? "block" : "none")};
  }
`;

const ToDoText = styled.span<{ checked: boolean }>`
  color: ${({ checked }) =>
    checked ? "var(--text-color-after)" : "var(--text-color)"};
  text-transform: uppercase;
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
`;

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

type Props = { checked: boolean; onChange: () => void; name: string };

export const ToDo = ({ checked, onChange, name }: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <CheckboxWrapper>
        <HiddenCheckbox checked={checked} onChange={onChange} />
        <StyledCheckbox checked={checked} />
        <ToDoText checked={checked}>{name}</ToDoText>
      </CheckboxWrapper>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Button onClick={() => console.log("edit")}>
          <img src="/edit.svg" alt="" />
        </Button>
        <Button onClick={() => console.log("delete")}>
          <img src="/trash.svg" alt="" />
        </Button>
      </div>
    </div>
  );
};
