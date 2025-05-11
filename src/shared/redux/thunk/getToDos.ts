import { Dispatch } from "redux";
import { State } from "../toDoReducer";

export const getToDos = (dispatch: Dispatch): Promise<State[]> => {
  return new Promise<State[]>((resolve, reject) => {
    try {
      const data: State[] = JSON.parse(localStorage.getItem("todos") || "[]");

      setTimeout(() => {
        resolve(data);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  })
    .then((res) => {
      dispatch({ type: "FETCH_ALL", data: res });
      return res; // Возвращаем данные для дальнейшей обработки
    })
    .catch((error) => {
      console.error("Error get todos:", error);
      throw error; // Пробрасываем ошибку дальше
    });
};
