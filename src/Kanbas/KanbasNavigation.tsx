import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    {
      id: 0,
      label: "Dashboard",
      path: "/Kanbas/Dashboard",
      icon: AiOutlineDashboard,
    },
    { id: 1, label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    {
      id: 2,
      label: "Calendar",
      path: "/Kanbas/Calendar",
      icon: IoCalendarOutline,
    },
    { id: 3, label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { id: 4, label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        className="list-group-item bg-black border-0"
      >
        <img src="./images/NEU.png" alt="" width="75px" />
      </a>
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className={`list-group-item text-center border-0 bg-black
            ${
              pathname.includes("Account")
                ? "bg-white text-danger"
                : "bg-black text-white"
            }`}
      >
        <FaRegCircleUser
          className={
            'fs-1 ${pathname.includes("Account") ? "text-danger": "text-white"'
          }
        />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.path}
          className={`list-group-item bg-black text-center border-0
              ${
                pathname.includes(link.label)
                  ? "text-danger bg-white"
                  : "text-white bg-black"
              }`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}
