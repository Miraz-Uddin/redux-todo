import Swal from "sweetalert2";
import { removeTodo } from "../redux/features/todo/todoSlice";
import store from "../redux/store/store";

export function removeTodoAlart(id) {
  Swal.fire({
    title: "Are you sure?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    background: "#272829",
    color: "#fff",
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch(removeTodo(id));
    }
  });
}
