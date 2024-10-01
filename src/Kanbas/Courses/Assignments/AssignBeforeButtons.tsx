import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
export default function AssignBeforeButtons() {
  return (
    <div className="float-end">
      <BsGripVertical className="me-2 fs-3" />
      <MdEditNote className="me-2 fs-3" />
    </div>
  );
}
