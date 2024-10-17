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
                        {formatDateToCustomString(assignment.available_date)} |
                        <strong> Due </strong>
                        {formatDateToCustomString(assignment.due_date)}|{" "}
                        {assignment.points} pts
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

function formatDateToCustomString(unixTime: number) {
  const date = new Date(unixTime * 1000);
  const isoString = date.toISOString();
  const [datePart, timePart] = isoString.split("T");

  // Get the hours and minutes
  const [hourStr, minute] = timePart.split(":");
  const hour = parseInt(hourStr);

  // Convert hour to 12-hour format and determine AM/PM
  const hour12 = hour % 12 || 12;
  const amPm = hour >= 12 ? "PM" : "AM";

  // Format the output
  return `${datePart} at ${hour12}:${minute.slice(0, 2)}${amPm}`;
}
