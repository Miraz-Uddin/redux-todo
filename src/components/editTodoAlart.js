import Swal from "sweetalert2";
import { editTodo } from "../redux/features/todo/todoSlice";
import store from "../redux/store/store";

export function editTodoAlart(id, item) {
  Swal.fire({
    title: "Update Task",
    background: "#272829",
    color: "#fff",
    input: "text",
    inputPlaceholder: "Update Task",
    inputValue: item,
    inputValidator: (value) => {
      if (value) {
        store.dispatch(editTodo({ index: id, todo: value }));
      }
    },
  });
}
