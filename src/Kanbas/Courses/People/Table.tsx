import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
// import { useParams } from "react-router-dom";
// import * as db from "../../Database";
import PeopleDetails from "./Details";
import { Link } from "react-router-dom";
import * as coursesClient from "../client";

// The component expects a prop named users, but Defaults to an empty array ([]) if users is not provided.
// Declares users as optional (users?:), meaning it’s not mandatory to pass this prop.
export default function PeopleTable({ users = [] }: { users?: any[] }) {
  // const { cid } = useParams();
  // const { users, enrollments } = db;
  // const [users, setUsers] = useState<any[]>([]);

  return (
    <div id="wd-people-table">
      <PeopleDetails />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            // .filter((usr) =>
            //   enrollments.some(
            //     (enrollment) =>
            //       enrollment.user === usr._id && enrollment.course === cid
            //   )
            // )
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <Link
                    to={`/Kanbas/Account/Users/${user._id}`}
                    className="text-decoration-none"
                  >
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName}</span>{" "}
                    <span className="wd-last-name">{user.lastName}</span>
                  </Link>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
