import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
type AssignBeforeButtonsProps = {
  assignmentId: string;
};

export default function AssignBeforeButtons({
  assignmentId,
}: AssignBeforeButtonsProps) {
  const { cid } = useParams();
  return (
    <div className="col-auto">
      <BsGripVertical className="me-2 fs-3" />
      <Link
        className="wd-assignment-link nav-link fs-2"
        to={`/Kanbas/Courses/${cid}/Assignments/${assignmentId}`}
      >
        <MdEditNote className="me-2 fs-1 text-success" />
      </Link>
    </div>
  );
}
