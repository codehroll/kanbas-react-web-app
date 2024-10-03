import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
export default function AssignBeforeButtons() {
  return (
    <div className="float-start">
      <BsGripVertical className="me-2 fs-3" />
      <MdEditNote className="me-2 fs-3" />
    </div>
  );
}
