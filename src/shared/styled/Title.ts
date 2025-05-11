import { styled } from "styled-components";

export const Title = styled.span<{ checked: boolean }>`
  color: ${({ checked }) =>
    checked ? "var(--text-color-after)" : "var(--text-color)"};
  text-transform: uppercase;
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
`;
