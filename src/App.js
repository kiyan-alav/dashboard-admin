import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import routes from "./routes";
// import supabase from "./config/supabaseClient";

import "./App.css";
import TopBar from "./components/TopBar/TopBar";

export default function App() {
  const [sideMenuStatus, setSideMenuStatus] = useState(null);

  const router = useRoutes(routes);

  const setMenuHandler = function (status) {
    console.log(status);
    setSideMenuStatus(status);
  };

  return (
    <>
      <TopBar onMenu={setMenuHandler} />
      <div className="sectionCenter">
        <SideBar sideBarStatus={sideMenuStatus} />
        {router}
      </div>
    </>
  );
}
