import React, { useEffect, useState } from "react";
import { Backdrop, Box, Modal, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseClient";
import "./EditFormModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const userProp = {
  name: "",
  country: "",
  email: "",
  username: "",
  password: "",
  img: "",
  gender: "",
  id: "",
};

export default function EditFormModal(props) {
  const [editUser, setEditUser] = useState(userProp);

  const navigate = useNavigate();

  const editHandler = async function (event) {
    event.preventDefault();
    if (
      !editUser.name ||
      !editUser.country ||
      !editUser.email ||
      !editUser.username ||
      !editUser.password ||
      !editUser.img ||
      !editUser.gender
    ) {
      alert("Fill All The Blanks Correctly!");
      return;
    }

    const { data, error } = await supabase
      .from("users")
      .update({
        name: editUser.name,
        country: editUser.country,
        email: editUser.email,
        username: editUser.username,
        password: editUser.password,
        img: editUser.img,
        gender: editUser.gender,
      })
      .eq("id", props.userId)
      .select();

    if (error) {
      alert("Something went wrong!");
    }
    if (data) {
      console.log(data);
      navigate("/", { replace: true });
    }

    props.onModal();
  };

  useEffect(() => {
    const fetchUser = async function () {
      if (props.userId) {
        const { data, error } = await supabase
          .from("users")
          .select()
          .eq("id", props.userId)
          .single();

        if (error) {
          navigate("/", { replace: true });
        }
        if (data) {
          setEditUser(data);
        }
      }
    };

    fetchUser();
  }, [navigate, props.userId]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.modalStatus}
        onClose={() => props.onModal()}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={props.modalStatus}>
          <Box sx={style}>
            <section className="formContainer">
              <form action="" className="form" onSubmit={editHandler}>
                <article className="inputContainer nameContainer">
                  <label htmlFor="fullName">Full Name:</label>
                  <input
                    type="text"
                    id="fullName"
                    onChange={(e) =>
                      setEditUser((prevObj) => ({
                        ...prevObj,
                        name: e.target.value,
                      }))
                    }
                    value={editUser.name}
                  />
                </article>
                <article className="inputContainer countryContainer">
                  <label htmlFor="country">Country:</label>
                  <input
                    type="text"
                    id="country"
                    onChange={(e) =>
                      setEditUser((prevObj) => ({
                        ...prevObj,
                        country: e.target.value,
                      }))
                    }
                    value={editUser.country}
                  />
                </article>
                <article className="inputContainer emailContainer">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    onChange={(e) =>
                      setEditUser((prevObj) => ({
                        ...prevObj,
                        email: e.target.value,
                      }))
                    }
                    value={editUser.email}
                  />
                </article>
                <article className="inputContainer userNameContainer">
                  <label htmlFor="userName">Username:</label>
                  <input
                    type="text"
                    id="userName"
                    onChange={(e) =>
                      setEditUser((prevObj) => ({
                        ...prevObj,
                        username: e.target.value,
                      }))
                    }
                    value={editUser.username}
                  />
                </article>
                <article className="inputContainer passwordContainer">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) =>
                      setEditUser((prevObj) => ({
                        ...prevObj,
                        password: e.target.value,
                      }))
                    }
                    value={editUser.password}
                  />
                </article>
                <article className="inputContainer avaterContainer">
                  <label htmlFor="avater">Avater URL:</label>
                  <input
                    type="text"
                    id="avater"
                    onChange={(e) =>
                      setEditUser((prevObj) => ({
                        ...prevObj,
                        img: e.target.value,
                      }))
                    }
                    value={editUser.img}
                  />
                </article>
                <article className="inputContainer genderContainer">
                  <div className="genderBox">
                    <label htmlFor="Male">Male</label>
                    <input
                      type="radio"
                      id="Male"
                      name="gender"
                      onChange={(e) =>
                        setEditUser((prevObj) => ({
                          ...prevObj,
                          gender: e.target.id,
                        }))
                      }
                      value={editUser.gender}
                    />
                  </div>
                  <div className="genderBox">
                    <label htmlFor="Female">Female</label>
                    <input
                      type="radio"
                      id="Female"
                      name="gender"
                      onChange={(e) =>
                        setEditUser((prevObj) => ({
                          ...prevObj,
                          gender: e.target.id,
                        }))
                      }
                      value={editUser.gender}
                    />
                  </div>
                </article>
                <button className="edit">Edit</button>
              </form>
            </section>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
