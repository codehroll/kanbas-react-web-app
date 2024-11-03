import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
  cancelAssignmentUpdate,
} from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function AssignmentEditor() {
  const { cid, assignmentId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assignment, assignments } = useSelector(
    (state: any) => state.assignmentsReducer
  );
  const isNewAssignment = assignmentId === "Editor";
  useEffect(() => {
    const curAssignment = assignments.find(
      (assignment: any) => assignment._id === assignmentId
    );
    if (curAssignment) {
      dispatch(setAssignment(curAssignment));
    } else {
      dispatch(cancelAssignmentUpdate(assignment));
    }
  }, [dispatch, assignmentId]);

  const handleSave = () => {
    if (isNewAssignment) {
      const newAssignment = {
        ...assignment,
        _id: new Date().getTime().toString(),
        course: cid,
      };
      dispatch(addAssignment(newAssignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    dispatch(cancelAssignmentUpdate(assignment));
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };
  return (
    <div id="wd-assignments-editor">
      <form>
        <label htmlFor="wd-name" className="mb-2">
          <strong>Assignment Name</strong>
        </label>
        <br />
        <input
          id="wd-name"
          value={assignment?.title}
          className="form-control"
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
          }
        />
        <br />
        <textarea
          value={assignment?.description}
          id="wd-description"
          className="form-control"
          cols={40}
          rows={12}
          onChange={(e) =>
            dispatch(
              setAssignment({ ...assignment, description: e.target.value })
            )
          }
        ></textarea>
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
              value={assignment?.points}
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, points: e.target.value })
                )
              }
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
              value={new Date(assignment.due_date * 1000)
                .toISOString()
                .slice(0, 16)}
              onChange={(e) =>
                dispatch(
                  setAssignment({
                    ...assignment,
                    // convert ISO 8601 date and time into Unix timestamp
                    due_date: new Date(e.target.value).getTime() / 1000,
                  })
                )
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
                  value={new Date(assignment.available_date * 1000)
                    .toISOString()
                    .slice(0, 16)}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({
                        ...assignment,
                        available_date:
                          new Date(e.target.value).getTime() / 1000,
                      })
                    )
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
                  value={new Date(assignment.due_date * 1000)
                    .toISOString()
                    .slice(0, 16)}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({
                        ...assignment,
                        available_date:
                          new Date(e.target.value).getTime() / 1000,
                      })
                    )
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
            <button onClick={handleCancel} className="btn btn-secondary me-2">
              Cancel{" "}
            </button>
            <button onClick={handleSave} className="btn btn-danger">
              Save{" "}
            </button>{" "}
          </Link>
        </div>
      </form>
    </div>
  );
}
