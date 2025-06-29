import { ChangeEvent, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "../../shared/ui/loading/Loading";
import { Button } from "../../shared/ui/button/Button";
import { useAppDispatch } from "../../store";
import { nanoid } from "nanoid";
import { createToDo } from "../../entities/todo/api";
import styles from "./addToDo.module.scss";

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
      dispatch(createToDo(newToDo));
      setTitle("");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <input
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddToDo();
            }
          }}
          placeholder={placeholder}
          className={styles.input}
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
