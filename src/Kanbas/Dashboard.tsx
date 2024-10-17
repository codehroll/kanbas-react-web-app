import { Link } from "react-router-dom";
import * as db from "./Database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
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
                  </div>
                </Link>
              </div>
            </div>
          ))}

          {/*  course 1*/}
          {/* <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card w-100 h-100">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="images/reactjs.jpg" width="100%" height={150} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="card-text">Full Stack software developer</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div> */}
          {/*  course 2*/}
          {/* <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card w-100 h-100">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5001/Home"
              >
                <img src="/images/python.jpg" width="100%" height={150} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5001 Fundamentals
                  </h5>
                  <p className="card-text">
                    Intensive Foundation of Computer Science
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div> */}
          {/*  course 3*/}
          {/* <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card w-100 h-100">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5002/Home"
              >
                <img src="/images/Math.png" width="100%" height={150} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5002 Discrete Structures
                  </h5>
                  <p className="card-text">Discrete Structures</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div> */}
          {/*  course 4*/}
          {/* <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card w-100 h-100">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5004/Home"
              >
                <img src="/images/Java.jpg" width="100%" height={150} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5004 Object-Oriented Design
                  </h5>
                  <p className="card-text">Object-Oriented Design</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div> */}
          {/*  course 5*/}
          {/* <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card w-100 h-100">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5008/Home"
              >
                <img
                  src="/images/Data Structures.png"
                  width="100%"
                  height={150}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5008 Data Structures
                  </h5>
                  <p className="card-text">
                    Data Structures, Algorithms, and Their Applications within
                    Computer Systems
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div> */}
          {/*  course 6*/}
          {/* <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card w-100 h-100">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5800/Home"
              >
                <img src="/images/algorithm.jpg" width="100%" height={150} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5800 Algorithms
                  </h5>
                  <p className="card-text">Algorithms</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div> */}
          {/*  course 7*/}
          {/* <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card w-100 h-100">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5200/Home"
              >
                <img src="/images/database.jpg" width="100%" height={150} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5200 Database
                  </h5>
                  <p className="card-text">Database Management Systems</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
