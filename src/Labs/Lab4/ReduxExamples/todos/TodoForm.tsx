import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  //   {
  //   todo,
  //   setTodo,
  //   addTodo,
  //   updateTodo,
  // }: {
  //   todo: { id: string; title: string };
  //   setTodo: (todo: { id: string; title: string }) => void;
  //   addTodo: (todo: { id: string; title: string }) => void;
  //   updateTodo: (todo: { id: string; title: string }) => void;
  // }
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item text-nowrap d-flex">
      <button
        onClick={() =>
          // addTodo(todo)
          dispatch(addTodo(todo))
        }
        id="wd-add-todo-click"
        className="btn btn-success ms-2"
      >
        Add
      </button>
      <button
        onClick={() =>
          // updateTodo(todo)
          dispatch(updateTodo(todo))
        }
        id="wd-update-todo-click"
        className="btn btn-warning ms-2"
      >
        Update
      </button>
      <input
        defaultValue={todo.title}
        onChange={(e) =>
          // setTodo({ ...todo, title: e.target.value })
          dispatch(setTodo({ ...todo, title: e.target.value }))
        }
        className="form-control  me-10"
        style={{ order: -1 }}
      />
    </li>
  );
}
