import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import * as coursesClient from "./client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { courses } from "../Database"; don't load courses from Database accept courses from Kanbas

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const [users, setUsers] = useState<any[]>([]);
  const { pathname } = useLocation();
  const fetchUsersForCourse = async () => {
    if (!cid) return;
    try {
      const the_users = await coursesClient.findUsersForCourse(cid as string);
      setUsers(the_users);
    } catch (error) {
      console.error("Failed to fetch users for course:", error);
    }
  };
  useEffect(() => {
    fetchUsersForCourse();
  }, [cid]);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="People" element={<PeopleTable users={users} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
