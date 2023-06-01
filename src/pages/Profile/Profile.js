import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../../config/supabaseClient";
import "./Profile.css";

export default function Profile() {
  const [profile, setProfile] = useState({});
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const dataFetched = async function () {
      const { data, error } = await supabase
        .from("users")
        .select()
        .eq("username", username)
        .single();

      setProfile(data);
    };

    dataFetched();
  }, [username]);

  const exitHandler = function () {
    navigate(-1);
  };

  return (
    <>
      <section className="profileContainer">
        <section className="profileTop">
          <article className="logoEmailContainer">
            <div className="logoContainer">
              <img src={`${profile.img}`} alt="" />
            </div>
            <p className="email">{profile.email}</p>
          </article>
          <article className="usernameContainer">
            <p className="usernameBox">
              <span className="name">{profile.name}</span>/
              <span className="username">{profile.username}</span>
            </p>
          </article>
        </section>
        <section className="profileBottom">
          <p className="name">Name: {profile.name}</p>
          <p className="gender">Gender: {profile.gender}</p>
          <p className="country">Country: {profile.country}</p>
          <p className="username">Username: {profile.username}</p>
          <p className="password">Password: {profile.password}</p>
        </section>
        <button className="exit" onClick={exitHandler}>
          Exit
        </button>
      </section>
    </>
  );
}
