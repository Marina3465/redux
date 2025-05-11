import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { ChangeEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "../widgets/Loading";
import { Button } from "../shared/styled/Button";
import { postAddToDo } from "../shared/redux/thunk/postToDo";

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

  const handleAddToDo = async () => {
    if (title.trim()) {
      setIsLoading(true);

      await postAddToDo(title, dispatch);

      setTitle("");
      setIsLoading(false);

      toast.success("Success add!", {
        theme: "dark",
        autoClose: 1000,
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
