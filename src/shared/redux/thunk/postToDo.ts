import { Dispatch } from "redux";

export const postAddToDo = (title: string, dispatch: Dispatch) => {
  return new Promise((resolve, reject) => {
    try {
      const data = JSON.parse(localStorage.getItem("todos") || "[]");
      const newTodo = {
        id: Date.now(),
        title: title,
        description: "Task description",
        isFinish: false,
      };

      setTimeout(() => {
        data.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(data));

        resolve(newTodo);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  })
    .then((res) =>
      dispatch({
        type: "ADD",
        data: res,
      })
    )
    .catch((error) => {
      console.error("Error adding todo:", error);
    });
};
