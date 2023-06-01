import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import MessageIcon from "@mui/icons-material/Message";
import MenuIcon from "@mui/icons-material/Menu";
import "./TopBar.css";

let pageTitle;

export default function TopBar(props) {
  const [sideMenu, setSideMenu] = useState(true);
  const location = useLocation();

  const sideMenuHandler = function () {
    setSideMenu((prev) => !prev);
    props.onMenu(sideMenu);
  };

  if (location.pathname === "/") {
    pageTitle = "Home";
  } else if (location.pathname === "/users") {
    pageTitle = "Users";
  } else if (location.pathname === "/sign-in") {
    pageTitle = "Sign In";
  } else if (location.pathname === "/sign-up") {
    pageTitle = "Sign Up";
  } else {
    pageTitle = "Profile";
  }

  return (
    <>
      <header className="header">
        <section className="headerLeft">
          <HomeIcon fontSize="large" className="headerLeftIcon" />
          <h3 className="headerLeftTitle">{pageTitle}</h3>
        </section>
        <section className="headerRight">
          <ul className="headerRightMenu">
            <Link to="/sign-in" className="link">
              <li className="headerRigthItem">
                <LoginIcon />
                Sign In
              </li>
            </Link>
            <Link to="/sign-up" className="link">
              <li className="headerRigthItem">
                <MessageIcon />
                Sign Up
              </li>
            </Link>
            <li
              className="headerRigthItem rightMenuIcon"
              onClick={sideMenuHandler}
            >
              <MenuIcon />
              Menu
            </li>
          </ul>
        </section>
      </header>
    </>
  );
}
