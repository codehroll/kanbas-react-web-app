import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addEnrollment, unEnrollment } from "./enrollmentsReducer";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const handleToggleEnrollments = () => {
    setShowAllCourses((prev) => !prev);
  };
  // create an object that maps course IDs to their enrollment status (true or false). This requires accumulating information into a single object
  const [enrollmentStatus, setEnrollmentStatus] = useState(
    courses.reduce((status, course) => {
      const enrolled = enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id &&
          enrollment.course === course._id
      );
      return { ...status, [course._id]: enrolled };
    }, {})
  );

  const handleEnrollmentToggle = (courseId: string) => {
    const isEnrolled = enrollmentStatus[courseId];

    if (isEnrolled) {
      // Find the enrollment ID to remove
      const curEnrollment = enrollments.find(
        (enrollment: any) =>
          enrollment.user === currentUser._id && enrollment.course === courseId
      );
      if (curEnrollment) {
        dispatch(unEnrollment(curEnrollment._id));
      }
    } else {
      // Add new enrollment
      dispatch(
        addEnrollment({
          user: currentUser._id,
          course: courseId,
        })
      );
    }

    // Update the local enrollment status for UI update
    setEnrollmentStatus((prevStatus: any) => ({
      ...prevStatus,
      [courseId]: !prevStatus[courseId],
    }));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          id="wd-enrollments-course-click"
          onClick={handleToggleEnrollments}
        >
          Enrollments
        </button>
      )}

      {/* for Faculty, implement add + update button, and edit area*/}
      {currentUser.role === "FACULTY" && (
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
      )}
      {currentUser.role === "FACULTY" && (
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
      )}
      {currentUser.role === "FACULTY" && (
        <textarea
          value={course.description}
          className="form-control"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
      )}
      <hr />
      {/* Published Courses */}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(showAllCourses
            ? courses
            : courses.filter((course) =>
                enrollments.some(
                  (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                )
              )
          ).map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={
                    currentUser.role === "STUDENT" &&
                    showAllCourses &&
                    !enrollmentStatus[course._id]
                      ? `/Kanbas/Dashboard`
                      : `/Kanbas/Courses/${course._id}/Home`
                  }
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src="/images/reactjs.jpg"
                    alt="reactjs course"
                    width="100%"
                    height={160}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    {currentUser.role === "FACULTY" && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    )}
                    {currentUser.role === "FACULTY" && (
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    )}
                    {currentUser.role === "STUDENT" && showAllCourses && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          handleEnrollmentToggle(course._id);
                        }}
                        className={`btn float-end ${
                          enrollmentStatus[course._id]
                            ? "btn-danger"
                            : "btn-success"
                        }`}
                        id={
                          enrollmentStatus[course._id]
                            ? "wd-unenroll-course-click"
                            : "wd-enroll-course-click"
                        }
                      >
                        {enrollmentStatus[course._id] ? "Unenroll" : "Enroll"}
                      </button>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
