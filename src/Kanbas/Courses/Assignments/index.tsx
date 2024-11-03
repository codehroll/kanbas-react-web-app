import AssignmentsControls from "./AssignmentsControls";
import AssignAfterButtons from "./AssignAfterButtons";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AssignBeforeButtons from "./AssignBeforeButtons";
import DeleteEditor from "./DeleteEditor";
import { useState } from "react";
export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string>("");
  const { currentUser } = useSelector((state: any) => state.accountReducer);
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
                    <AssignBeforeButtons assignmentId={assignment._id} />
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
                      {currentUser.role === "FACULTY" && (
                        <FaTrash
                          className="text-danger me-2 mb-1"
                          data-bs-toggle="modal"
                          data-bs-target="#wd-del-assignment-dialog"
                          onClick={() => setAssignmentToDelete(assignment._id)}
                        />
                      )}
                      <DeleteEditor
                        dialogTitle="Delete Assignment"
                        assignmentId={assignmentToDelete}
                      />
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
