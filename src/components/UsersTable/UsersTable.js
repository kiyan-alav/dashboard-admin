import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditFormModal from "../EditFormModal/EditFormModal";
import supabase from "../../config/supabaseClient";
import "./UsersTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function UsersTable() {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userId, setUserId] = useState("");

  const [fetchError, setFetchError] = useState(null);
  const [dataFetched, setData] = useState(async () => {
    const { data, error } = await supabase.from("users").select();

    if (data) return data;
    return error;
  });

  const location = useLocation();

  useEffect(() => {
    const fetchedDara = async function () {
      const { data, error } = await supabase.from("users").select();

      if (error) {
        setFetchError("Something went wrong :(");
        setData(null);
      }
      if (data) {
        setData(data);
        setFetchError(null);
      }
    };

    fetchedDara();
  }, []);

  const editModalHandler = function () {
    setEditModal((prev) => !prev);
  };

  const deleteModalHandler = function () {
    setDeleteModal((prev) => !prev);
  };

  const columns = [
    {
      field: "name",
      headerName: "Full Name",
      width: 180,
      renderCell: (param) => {
        return (
          <>
            <Link
              to={`/profile/${param.row.username}`}
              style={{ textDecoration: "none", color: "#222" }}
            >
              <div
                className="avatarImgName"
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <img
                  src={`${param.row.img}`}
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  alt=""
                />
                <p className="userName">{param.row.name}</p>
              </div>
            </Link>
          </>
        );
      },
    },
    { field: "gender", headerName: "Gender", width: 70 },
    { field: "country", headerName: "Country", width: 130 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "username", headerName: "Username", width: 130 },
    { field: "password", headerName: "Password", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (param) => {
        if (location.pathname === "/users") {
          return (
            <>
              <section className="editDeleteBtnContainer">
                <EditIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    editModalHandler();
                    setUserId(param.row.id);
                  }}
                />
                <DeleteIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    deleteModalHandler();
                    setUserId(param.row.id);
                  }}
                />
              </section>
            </>
          );
        } else {
          return <p className="noAction">No Action Needed Here!</p>;
        }
      },
    },
  ];

  return (
    <>
      <section className="userTableContainer">
        <DataGrid
          style={{ borderRadius: "0.75rem" }}
          rows={dataFetched}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </section>
      <EditFormModal
        modalStatus={editModal}
        onModal={editModalHandler}
        userId={userId}
      />
      <DeleteModal
        modalStatus={deleteModal}
        onModal={deleteModalHandler}
        userId={userId}
      />
    </>
  );
}
