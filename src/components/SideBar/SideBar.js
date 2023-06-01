import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import LoginIcon from "@mui/icons-material/Login";
import MessageIcon from "@mui/icons-material/Message";
import "./SideBar.css";

export default function SideBar({ sideBarStatus }) {
  return (
    <>
      <aside className={`sidebar ${!sideBarStatus ? "hideSidebar" : ""}`}>
        <section className="sidebarTop">
          <DashboardIcon className="sidebarTopIcon" />
          <h2 className="sidebarTopTitle">Dashboard Admin</h2>
        </section>
        <section className="sidebarBottom">
          <ul className="sidebarMenu">
            <Link to="/" className="link">
              <li className="sidebarItem">
                <HomeIcon />
                Home
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarItem">
                <GroupIcon />
                All Users
              </li>
            </Link>
            <Link to="/sign-in" className="link">
              <li className="sidebarItem">
                <LoginIcon />
                Sign In
              </li>
            </Link>
            <Link to="/sign-up" className="link">
              <li className="sidebarItem">
                <MessageIcon />
                Sign Up
              </li>
            </Link>
          </ul>
        </section>
      </aside>
    </>
  );
}
