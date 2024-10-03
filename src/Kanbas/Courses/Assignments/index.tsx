import AssignmentsControls from "./AssignmentsControls";
import AssignAfterButtons from "./AssignTitleButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import { RxTriangleDown } from "react-icons/rx";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
export default function Assignments() {
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
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row align-items-center">
                <div className="col-auto">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdEditNote className="me-2 fs-1 text-success" />
                </div>
                <div className="col">
                  <p>
                    <a
                      className="wd-assignment-link nav-link fs-4"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                    >
                      A1
                    </a>
                  </p>
                  <p className="mb-0">
                    <span className="text-danger">Multiple Modules </span> |
                    <strong> Not Available until</strong> May 6 at 12:00 am |
                    <strong> Due </strong>May 13 at 11:59pm | 100 pts
                  </p>
                </div>
                <div className="col-auto float-end">
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row align-items-center">
                <div className="col-auto">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdEditNote className="me-2 fs-1 text-success" />
                </div>
                <div className="col">
                  <p>
                    <a
                      className="wd-assignment-link nav-link fs-4"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                    >
                      A2
                    </a>
                  </p>
                  <p className="mb-0">
                    <span className="text-danger">Multiple Modules </span> |
                    <strong> Not Available until</strong> May 13 at 12:00 am |
                    <strong> Due </strong>May 20 at 11:59pm | 100 pts
                  </p>
                </div>
                <div className="col-auto float-end">
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row align-items-center">
                <div className="col-auto">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdEditNote className="me-2 fs-1 text-success" />
                </div>
                <div className="col">
                  <p>
                    <a
                      className="wd-assignment-link nav-link fs-4"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                    >
                      A3
                    </a>
                  </p>
                  <p className="mb-0">
                    <span className="text-danger">Multiple Modules </span> |{" "}
                    <strong> Not Available until</strong> May 20 at 12:00 am |{" "}
                    <strong> Due </strong>May 26 at 11:59pm | 100 pts
                  </p>
                </div>
                <div className="col-auto float-end">
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
