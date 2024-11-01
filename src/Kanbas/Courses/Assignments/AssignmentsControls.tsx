import { FaPlus } from "react-icons/fa6";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import * as db from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import Editor from "./AssignmentEditor";

export default function AssignmentsControls() {
  const { cid, assignmentId } = useParams();
  const { assignment, assignments } = useSelector(
    (state: any) => state.assignmentsReducer
  );
  const dispatch = useDispatch();
  const curAssignment = assignments.find(
    (assignment: any) => assignment._id === assignmentId
  );

  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <div className="float-start">
        <div className="input-group me-3 border">
          <span className="input-group-text bg-white border-0">
            <HiMiniMagnifyingGlass className="position-relative me-1 fs-4 text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-0"
            id="search-assignment"
            placeholder="Search for Assignment"
          />
        </div>
      </div>
      <div className="float-end">
        <Link to={"./Editor"}>
          <button
            id="wd-add-assignment-btn"
            className="btn btn-lg btn-danger me-1 float-end"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Assignment
          </button>
        </Link>
        <button
          id="wd-add-group-btn"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </button>
      </div>
    </div>
  );
}
