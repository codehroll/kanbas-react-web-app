import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kanbas/Account/Profile");
  };

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="wd-username form-control mb-2"
      />

      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        type="password"
        className="wd-password form-control mb-2"
      />

      {/* <input
        placeholder="verify password"
        type="password"
        className="form-control mb-2"
      /> */}
      <button
        onClick={signup}
        className="wd-signup-btn btn btn-primary mb-2 w-100"
      >
        Sign up
      </button>
      <br />
      <Link to="/Kanbas/Account/Signin" className="wd-signin-link">
        Sign in
      </Link>

      {/* <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100">
        Sign up
      </Link>
      <Link to="/Kanbas/Account/Signin">Sign in</Link> */}
    </div>
  );
}
