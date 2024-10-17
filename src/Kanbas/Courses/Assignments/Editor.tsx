import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
export default function AssignmentEditor() {
  const { cid, assignmentId } = useParams();
  const assignments = db.assignments;
  const curAssignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  return (
    <div id="wd-assignments-editor">
      <form>
        <label htmlFor="wd-name" className="mb-2">
          <strong>Assignment Name</strong>
        </label>
        <br />
        <input
          id="wd-name"
          value={curAssignment?.title || ""}
          className="form-control"
        />
        <br />
        <textarea
          id="wd-description"
          className="form-control"
          cols={40}
          rows={12}
        >
          {curAssignment?.description || ""}
        </textarea>
        <br />
        <div className="mb-3 row">
          <label
            htmlFor="wd-points"
            className="col-sm-4 col-form-label text-end"
          >
            Points
          </label>
          <div className="col-sm-8">
            <input
              id="wd-points"
              type="text"
              className="form-control"
              value={curAssignment?.points || ""}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor="wd-group"
            className="col-sm-4 col-form-label text-end"
          >
            Assignment Group
          </label>
          <div className="col-sm-8">
            <select className="form-select">
              <option selected value="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
              <option value="option2">OPTION2</option>
              <option value="option3">OPTION3</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label
            htmlFor="wd-display-grade-as"
            className="col-sm-4 col-form-label text-end"
          >
            Display Grades as
          </label>
          <div className="col-sm-8">
            <select className="form-select">
              <option selected value="Percentage">
                Percentage
              </option>
              <option value="option2">OPTION2</option>
              <option value="option3">OPTION3</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label
            htmlFor="wd-submission-type"
            className="col-sm-4 col-form-label text-end"
          >
            Submission Type
          </label>
          <div className="col border col-sm-8">
            <div className="mt-3">
              <select className="form-select">
                <option selected value="Online">
                  Online
                </option>
                <option value="option2">OPTION2</option>
                <option value="option3">OPTION3</option>
              </select>
            </div>
            <div className="col">
              <label className="fw-bold mb-3 mt-3">Online Entry Options</label>{" "}
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  name="online-entry-check-genre"
                  id="wd-text-entry"
                  className="form-check-input"
                ></input>
                <label htmlFor="wd-text-entry" className="form-check-label">
                  Text Entry
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  name="online-entry-check-genre"
                  id="wd-website-url"
                  className="form-check-input"
                ></input>
                <label htmlFor="wd-website-url" className="form-check-label">
                  Website URL
                </label>{" "}
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  name="online-entry-check-genre"
                  id="wd-media-recordings"
                  className="form-check-input"
                ></input>
                <label
                  htmlFor="wd-media-recordings"
                  className="form-check-label"
                >
                  Media Recordings
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  name="online-entry-check-genre"
                  id="wd-student-annotation"
                  className="form-check-input"
                ></input>
                <label
                  htmlFor="wd-student-annotation"
                  className="form-check-label"
                >
                  Student Annotation
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  name="online-entry-check-genre"
                  id="wd-file-upload"
                  className="form-check-input"
                ></input>
                <label htmlFor="wd-file-upload" className="form-check-label">
                  File Upload
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 row">
          <label
            htmlFor="wd-assign"
            className="col-sm-4 col-form-label text-end"
          >
            Assign
          </label>
          <div className="col border">
            <label htmlFor="wd-assign-to" className="col-form-label fw-bold">
              Assign to
            </label>
            <input
              id="wd-assign-to"
              className="form-control"
              value="Everyone"
            />
            <label htmlFor="wd-due-date" className="col-form-label fw-bold">
              Due
            </label>

            <input
              type="datetime-local"
              id="wd-due-date"
              className="form-control"
              value={
                curAssignment?.due_date
                  ? new Date(curAssignment.due_date * 1000)
                      .toISOString()
                      .slice(0, 16)
                  : ""
              }
            />
            <div className="row">
              <div className="col">
                <label
                  htmlFor="wd-available-from"
                  className="col-form-label fw-bold"
                >
                  Available from
                </label>
                <input
                  id="wd-available-from"
                  type="datetime-local"
                  className="form-control mb-3"
                  value={
                    curAssignment?.available_date
                      ? new Date(curAssignment.available_date * 1000)
                          .toISOString()
                          .slice(0, 16)
                      : ""
                  }
                />
              </div>
              <div className="col">
                <label
                  htmlFor="wd-available-until"
                  className="col-form-label fw-bold"
                >
                  Until
                </label>
                <input
                  id="wd-available-until"
                  type="datetime-local"
                  className="form-control mb-3"
                  value={
                    curAssignment?.available_date
                      ? new Date(curAssignment.due_date * 1000)
                          .toISOString()
                          .slice(0, 16)
                      : ""
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div className="float-end">
          <Link to={`/Kanbas/Courses/${cid}/Assignments/`}>
            <button className="btn btn-secondary me-2">Cancel </button>
            <button className="btn btn-danger">Save </button>{" "}
          </Link>
        </div>
      </form>
    </div>
  );
}
