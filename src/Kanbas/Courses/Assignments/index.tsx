import AssignmentsControls from "./AssignmentsControls";
import AssignAfterButtons from "./AssignAfterButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls />
      <br />
      <br />
      <br />
      <ul id="wd-assignment" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignAfterButtons />
          </div>
        </li>
      </ul>
      <ul id="wd-assignment-list list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex ">
          <BsGripVertical className="me-2 fs-3" />
          <MdEditNote className="me-2 fs-1 text-success" />
          <div className="d-flex flex-column">
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A1
            </a>
            <p className="mb-0">
              <span className="text-danger">Multiple Modules</span> |{" "}
              <strong>Not Available until</strong> May 6 at 12:00 am |{" "}
              <strong>Due </strong>May 13 at 11:59pm | 100 pts
            </p>
          </div>
          <div className="d-flex">
            <LessonControlButtons />
          </div>
        </li>
        <li className="wd-assignment-list-item">
          {/* A2 Complete On Your Own */}
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A2
          </a>
          <p>
            Multiple Modules | <strong>Not Available until</strong> May 13 at
            12:00 am | <strong>Due </strong>May 20 at 11:59pm | 100 pts
          </p>
        </li>
        <li className="wd-assignment-list-item">
          {/* A3 */}
          <a
            className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123"
          >
            A3 - JAVASCRIPT + REACT
          </a>
          <p>
            Multiple Modules | <strong>Not Available until</strong> May 20 at
            12:00 am | <strong>Due </strong>May 27 at 11:59pm | 100 pts
          </p>
        </li>
      </ul>
    </div>
  );
}
