import { styled } from "styled-components";
import Button from "./Button";

const Input = styled.input`
  background: var(--bg-color);
  border: none;
  border-bottom: 1px solid var(--primary-color);
  width: 100%;
  padding: 5px 5px;
  outline: none;
  color: var(--text-color);
`;

type Props = {
  placeholder: string;
};

export const AddToDo = ({ placeholder }: Props) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Input placeholder={placeholder} />
      <Button onClick={() => {}}>
        <img width={"16px"} src="/plus.svg" alt="" />
      </Button>
    </div>
  );
};
