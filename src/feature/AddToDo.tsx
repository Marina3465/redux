import { styled } from "styled-components";
import { ChangeEvent, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "../widgets/Loading";
import { Button } from "../shared/styled/Button";
import { useAppDispatch } from "../shared/redux/store";
import { addToDo } from "../shared/redux/reducers/toDoReducer";
import { nanoid } from "nanoid";

const Input = styled.input`
  background: var(--bg-color);
  border: none;
  border-bottom: 1px solid var(--primary-color);
  width: 100%;
  padding: 10px 15px;
  outline: none;
  color: var(--text-color);
`;

type Props = {
  placeholder: string;
};

export const AddToDo = ({ placeholder }: Props) => {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddToDo = async () => {
    if (title.trim()) {
      setIsLoading(true);
      const newToDo = {
        id: nanoid(),
        title: title,
        description: "Some description",
        isFinish: false,
      };
      dispatch(addToDo(newToDo));
      setTitle("");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <Input
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          placeholder={placeholder}
        />
        <Button onClick={handleAddToDo}>
          <img width={"16px"} src="/plus.svg" alt="" />
        </Button>
      </div>
      <ToastContainer />
      {isLoading && <Loading />}
    </>
  );
};
