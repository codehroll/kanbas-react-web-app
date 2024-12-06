import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  setEnrollments,
  addEnrollment,
  unEnrollment,
} from "./enrollmentsReducer";
import * as userClient from "../Account/client";
// import * as coursesClient from "../Courses/client";

export default function Dashboard({
  allCourses,
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  // enrolling,
  // setEnrolling,
  // updateEnrollment,
  enrollCurrentCourse,
  unenrollCurrentCourse,
}: {
  allCourses: any[];
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  // enrolling: boolean;
  // setEnrolling: (enrolling: boolean) => void;
  // updateEnrollment: (courseId: string, enrolled: boolean) => void;
  enrollCurrentCourse: (userId: string, courseId: string) => void;
  unenrollCurrentCourse: (userId: string, courseId: string) => void;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const fetchEnrollments = async () => {
    const curUserEnrollments = await userClient.findMyEnrollments();
    dispatch(setEnrollments(curUserEnrollments || []));
  };
  useEffect(() => {
    fetchEnrollments();
  }, [currentUser, courses, allCourses]);

  const handleToggleEnrollments = () => {
    setShowAllCourses((prev) => !prev);
  };

  type EnrollmentStatus = { [key: string]: boolean };
  // create an object that maps course IDs to their enrollment status (true or false). This requires accumulating information into a single object
  const [enrollmentStatus, setEnrollmentStatus] = useState<EnrollmentStatus>(
    {}
  );
  useEffect(() => {
    if (allCourses && enrollments) {
      const initialStatus = allCourses.reduce((status, curCourse) => {
        const enrolled = enrollments.some(
          (enrollment: any) => enrollment.course._id === curCourse._id
        );
        return { ...status, [curCourse._id]: enrolled };
      }, {});
      setEnrollmentStatus(initialStatus);
    }
  }, [allCourses, enrollments]);

  const handleEnrollmentToggle = (userId: string, courseId: string) => {
    const isEnrolled = enrollmentStatus[courseId];
    // console.log("[HD]" + "course id: " + courseId + " status: " + isEnrolled);
    if (isEnrolled) {
      // Find the enrollment ID to remove
      const curEnrollment = enrollments.find(
        (enrollment: any) =>
          // enrollment.user === currentUser._id &&
          enrollment.course._id === courseId
      );
      if (curEnrollment) {
        unenrollCurrentCourse(userId, courseId);
        // dispatch(unEnrollment(curEnrollment._id));
      }
    } else {
      // Add new enrollment
      enrollCurrentCourse(userId, courseId);
      // dispatch(
      //   addEnrollment({
      //     user: userId,
      //     course: courseId,
      //   })
      // );
    }

    // Update the local enrollment status for UI update
    setEnrollmentStatus((prevStatus: any) => ({
      ...prevStatus,
      [courseId]: !prevStatus[courseId],
    }));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        {/* <button
          onClick={() => setEnrolling(!enrolling)}
          className="float-end btn btn-primary"
        >
          {enrolling ? "My Courses" : "All Courses"}
        </button> */}
      </h1>
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

      {/* for Faculty/ADMIN, implement add + update button, and edit area*/}
      {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
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
      {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
      )}
      {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
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
          {(showAllCourses ? allCourses : courses)
            // .filter((course) =>
            //   enrollments.some(
            //     (enrollment: any) =>
            //       enrollment.user === currentUser._id &&
            //       enrollment.course === course._id
            //   )
            // ) */
            .map((course) => (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
                key={course._id}
              >
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
                        {/* {enrolling && (
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              updateEnrollment(course._id, !course.enrolled);
                            }}
                            className={`btn ${
                              course.enrolled ? "btn-danger" : "btn-success"
                            } float-end`}
                          >
                            {course.enrolled ? "Unenroll" : "Enroll"}
                          </button>
                        )} */}

                        {course.name}
                      </h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <button className="btn btn-primary"> Go </button>
                      {(currentUser.role === "FACULTY" ||
                        currentUser.role === "ADMIN") && (
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
                      {(currentUser.role === "FACULTY" ||
                        currentUser.role === "ADMIN") && (
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
                            handleEnrollmentToggle(currentUser._id, course._id);
                          }}
                          className={`btn float-end 
                            ${
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
