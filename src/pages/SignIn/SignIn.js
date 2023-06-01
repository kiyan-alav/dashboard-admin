import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseClient";
import "./SignIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const signInHandler = async function (event) {
    event.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setError("Something went wrong!");
    }
    if (data) {
      navigate(`/profile/${data.user.user_metadata.username}`);
    }
  };

  return (
    <>
      <section className="formContainer">
        <form action="" className="form" onSubmit={signInHandler}>
          <article className="inputContainer emailContainer">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </article>
          <article className="inputContainer passwordContainer">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </article>
          <button className="signIn">Sign In</button>
        </form>
      </section>
    </>
  );
}
