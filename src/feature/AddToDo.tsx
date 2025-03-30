import { styled } from "styled-components";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { ChangeEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "../widgets/Loading";

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

  const dispatch = useDispatch();

  const handleAddToDo = () => {
    if (title.trim()) {
      setIsLoading(true);

      const newTodo = {
        id: Date.now(),
        title: title,
        description: "Task description",
        isFinish: false,
      };

      dispatch({
        type: "ADD",
        data: newTodo,
      });

      setTitle("");
      setIsLoading(false);

      toast.success("Success add!", {
        theme: "dark",
      });
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
