import React, { useState } from "react";
import axios from "axios";

function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let isValid = true;

    // Validate name
    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  async function register() {
    if (validateForm() && password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      try {
        const result = await axios.post(
          "http://localhost:5000/register",
          user
        );
        console.log("Registration successful:", result.data);
      } catch (error) {
        console.log("Registration failed:", error?.message);
      }
    } else if (password !== cpassword) {
      alert("Passwords do not match");
    }
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 mt-5">
        <div className="bs">
          <h2>Register</h2>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {nameError && <p className="text-danger">{nameError}</p>}
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailError && <p className="text-danger">{emailError}</p>}
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            value={cpassword}
            onChange={(e) => {
              setcpassword(e.target.value);
            }}
          />
          <button className="btn btn-primary" onClick={register}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
