import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        id="wd-username"
        value="alice"
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        value="1234"
        className="form-control mb-2"
      />
      <input
        id="wd-firstname"
        placeholder="First Name"
        value="Alice"
        className="form-control mb-2"
      />
      <input
        id="wd-lastname"
        placeholder="Last Name"
        value="Wonderland"
        className="form-control mb-2"
      ></input>
      <input
        id="wd-dob"
        value="yyyy-mm-dd"
        type="date"
        className="form-control mb-2"
      />
      <input
        id="wd-email"
        value="alice@wondeland.com"
        type="email"
        className="form-control mb-2"
      />
      <select id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="Faculty">Facultyr</option>
        <option value="Student">Student</option>
      </select>
      <Link to={"/Kanbas/Account/Signin"} className="btn btn-danger w-100">
        Sign Out
      </Link>
    </div>
  );
}
