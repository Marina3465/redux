import styled from "styled-components";

type Props = {
  placeholder: string;
};

const Input = styled.input`
  background: var(--bg-color);
  border: 1px solid var(--text-color);
  border-radius: 5px;
  width: 100%;
  padding: 10px 15px;
  outline: none;
  color: var(--text-color);
  &:focus {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
  }
`;

export const Search = ({ placeholder }: Props) => {
  return <Input placeholder={placeholder} />;
};
