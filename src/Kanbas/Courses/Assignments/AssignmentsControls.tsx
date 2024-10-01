import { FaPlus } from "react-icons/fa6";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap d-flex">
      <div className="input-group me-3">
        <span className="input-group-text">
          <HiMiniMagnifyingGlass className="position-relative me-1" />
        </span>
        <input
          type="text"
          className="form-control"
          id="search-assignment"
          placeholder="Search for Assignment"
        />
      </div>

      <button
        id="wd-add-group-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <button
        id="wd-add-assignment-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
    </div>
  );
}
