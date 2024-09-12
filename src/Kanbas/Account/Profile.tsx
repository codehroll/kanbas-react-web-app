import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input id="wd-username" value='alice' placeholder="username" /><br />
            <input id="wd-password" placeholder="password" type="password" value="1234"/><br />
            <input id="wd-firstname" placeholder="First Name" value="Alice" /><br />
            <input id="wd-lastname" placeholder="Last Name" value="Wonderland"></input><br />
            <input id="wd-dob" value="2000-01-01" type="date" /> <br />
            <input id="wd-email" value="alice@wondeland.com" type="email" /><br />
            <select id="wd-role">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="Faculty">Facultyr</option>
                <option value="Student">Student</option>

            </select><br />
            <Link to={"/Kanbas/Account/Signin"}>Sign Out</Link>
            
        </div>
        
    );
}