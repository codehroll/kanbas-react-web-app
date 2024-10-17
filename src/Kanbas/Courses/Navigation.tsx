import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0 d-none d-md-block"
    >
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item border border-0 bg-white
            ${pathname.includes(link) ? "text-black active" : "text-danger"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
