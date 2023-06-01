import React from "react";
import UsersTable from "../../components/UsersTable/UsersTable";

import "./Users.css";

export default function Users() {
  return (
    <>
      <section className="allUsersContainer">
        <UsersTable />
      </section>
    </>
  );
}
