import { styled } from "styled-components";

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const StyledCheckbox = styled.span<{ checked: boolean }>`
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
