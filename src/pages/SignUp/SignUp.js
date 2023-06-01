import React, { useState } from "react";
import { Box, Typography, Modal } from "@mui/material";
import supabase from "../../config/supabaseClient";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const userProp = {
  name: "",
  country: "",
  email: "",
  username: "",
  password: "",
  img: "",
  gender: "",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SignUp() {
  const [newUser, setNewUser] = useState(userProp);
  const [formError, setFormError] = useState("");
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const userAuth = async function (newUser) {
    const { data, error } = await supabase.auth.signUp({
      email: newUser.email,
      password: newUser.password,
      options: {
        data: {
          username: newUser.username,
          name: newUser.name,
          country: newUser.country,
          img: newUser.img,
          gender: newUser.gender,
        },
      },
    });

    alert("Please check your email and complete your registration");

    console.log(data);
  };

  const submitHandler = async function (event) {
    event.preventDefault();
    if (
      !newUser.name ||
      !newUser.country ||
      !newUser.email ||
      !newUser.username ||
      !newUser.password ||
      !newUser.img ||
      !newUser.gender
    ) {
      setFormError("Fill All The Blanks Correctly!");
      setModal((prev) => !prev);
      return;
    }

    const { data, error } = await supabase.from("users").insert([newUser]);

    if (error) {
      console.log(error);
      setFormError("Fill All The Blanks Correctly!");
    }
    if (data) {
      console.log(data);
      setFormError(null);
    }

    userAuth(newUser);

    setNewUser(userProp);
    navigate("/", { replace: true });
  };

  return (
    <>
      <section className="formContainer">
        <form action="" className="form" onSubmit={submitHandler}>
          <article className="inputContainer nameContainer">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              onChange={(e) =>
                setNewUser((prevObj) => ({
                  ...prevObj,
                  name: e.target.value,
                }))
              }
              value={newUser.name}
            />
          </article>
          <article className="inputContainer countryContainer">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              onChange={(e) =>
                setNewUser((prevObj) => ({
                  ...prevObj,
                  country: e.target.value,
                }))
              }
              value={newUser.country}
            />
          </article>
          <article className="inputContainer emailContainer">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              onChange={(e) =>
                setNewUser((prevObj) => ({
                  ...prevObj,
                  email: e.target.value,
                }))
              }
              value={newUser.email}
            />
          </article>
          <article className="inputContainer userNameContainer">
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              id="userName"
              onChange={(e) =>
                setNewUser((prevObj) => ({
                  ...prevObj,
                  username: e.target.value,
                }))
              }
              value={newUser.username}
            />
          </article>
          <article className="inputContainer passwordContainer">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) =>
                setNewUser((prevObj) => ({
                  ...prevObj,
                  password: e.target.value,
                }))
              }
              value={newUser.password}
            />
          </article>
          <article className="inputContainer avaterContainer">
            <label htmlFor="avater">Avater URL:</label>
            <input
              type="text"
              id="avater"
              onChange={(e) =>
                setNewUser((prevObj) => ({
                  ...prevObj,
                  img: e.target.value,
                }))
              }
              value={newUser.img}
            />
          </article>
          <article className="inputContainer genderContainer">
            <div className="genderBox">
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="male"
                name="gender"
                onChange={(e) =>
                  setNewUser((prevObj) => ({
                    ...prevObj,
                    gender: e.target.id,
                  }))
                }
                value={newUser.gender}
              />
            </div>
            <div className="genderBox">
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="female"
                name="gender"
                onChange={(e) =>
                  setNewUser((prevObj) => ({
                    ...prevObj,
                    gender: e.target.id,
                  }))
                }
                value={newUser.gender}
              />
            </div>
          </article>
          <button className="signUp">Sign Up</button>
        </form>
      </section>

      {modal && (
        <Modal
          open={modal}
          onClose={() => setModal((prev) => !prev)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-description"
              style={{ fontSize: "1.2rem" }}
              sx={{ mt: 2 }}
            >
              {formError}
            </Typography>
          </Box>
        </Modal>
      )}
    </>
  );
}
