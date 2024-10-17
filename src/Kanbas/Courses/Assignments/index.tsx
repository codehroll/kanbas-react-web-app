import AssignmentsControls from "./AssignmentsControls";
import AssignAfterButtons from "./AssignTitleButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { RxTriangleDown } from "react-icons/rx";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments">
      <AssignmentsControls />
      <br />
      <br />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <RxTriangleDown className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignAfterButtons />
          </div>
          <ul className="wd-assigns list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <BsGripVertical className="me-2 fs-3" />
                      <MdEditNote className="me-2 fs-1 text-success" />
                    </div>
                    <div className="col">
                      <p>
                        <Link
                          className="wd-assignment-link nav-link fs-4"
                          to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        >
                          {assignment.title}
                        </Link>
                      </p>
                      <p className="mb-0">
                        <span className="text-danger">Multiple Modules </span> |
                        <strong> Not Available until</strong>{" "}
                        {assignment.available_date} |<strong> Due </strong>
                        {assignment.due_date}| {assignment.points} pts
                      </p>
                    </div>
                    <div className="col-auto float-end">
                      <GreenCheckmark />
                      <IoEllipsisVertical className="fs-4" />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
