import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/*  course 1*/}
        <div className="wd-dashboard-course">
          <img src="images/reactjs.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        {/*  course 2*/}
        <div className="wd-dashboard-course">
          <img src="/images/python.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5001/Home"
            >
              CS5001 Fundamentals
            </Link>
            <p className="wd-dashboard-course-title">
              Intensive Foundation of Computer Science
            </p>
            <Link to="/Kanbas/Courses/5001/Home"> Go </Link>
          </div>
        </div>
        {/*  course 3*/}
        <div className="wd-dashboard-course">
          <img src="/images/Math.png" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5002/Home"
            >
              CS5002 Discrete Structures
            </Link>
            <p className="wd-dashboard-course-title">Discrete Structures</p>
            <Link to="/Kanbas/Courses/5002/Home"> Go </Link>
          </div>
        </div>
        {/*  course 4*/}
        <div className="wd-dashboard-course">
          <img src="/images/Java.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5004/Home"
            >
              CS5004 Object-Oriented Design
            </Link>
            <p className="wd-dashboard-course-title">Object-Oriented Design</p>
            <Link to="/Kanbas/Courses/5004/Home"> Go </Link>
          </div>
        </div>
        {/*  course 5*/}
        <div className="wd-dashboard-course">
          <img src="/images/Data Structures.png" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5008/Home"
            >
              CS5008 Data Structures
            </Link>
            <p className="wd-dashboard-course-title">
              Data Structures, Algorithms, and Their Applications within
              Computer Systems
            </p>
            <Link to="/Kanbas/Courses/5008/Home"> Go </Link>
          </div>
        </div>
        {/*  course 6*/}
        <div className="wd-dashboard-course">
          <img src="/images/algorithm.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5800/Home"
            >
              CS5800 Algorithms
            </Link>
            <p className="wd-dashboard-course-title">Algorithms</p>
            <Link to="/Kanbas/Courses/5800/Home"> Go </Link>
          </div>
        </div>
        {/*  course 7*/}
        <div className="wd-dashboard-course">
          <img src="/images/database.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5200/Home"
            >
              CS5200 Database
            </Link>
            <p className="wd-dashboard-course-title">
              Database Management Systems
            </p>
            <Link to="/Kanbas/Courses/5200/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
