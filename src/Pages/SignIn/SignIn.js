import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SignInSideImg from "../../Assets/SignPageImg.jpg";
import { Link } from "react-router-dom";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccessHub from "../../Assets/access-hub-logo.png"

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage("");
    setMessage("");

    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setMessage("You have signed in successfully! Redirecting...");
    setTimeout(() => {
      navigate('/application/manage-app-content')
    }, 500);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          // flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // padding: "20px",
          backgroundColor: "#f9f9f9",
          position: "relative",
        }}
      >
        <img
          src={AccessHub}
          alt="Logo"
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            height: "50px",
            objectFit: "contain",
          }}
        />
        <div style={{ width: "400px" }}>
          <h1 style={{ marginBottom: "20px" }}>Sign In</h1>
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              maxWidth: "400px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link style={{margin:"10px 0px" ,color:"var(--primary-color)"}} className="forget-password-link">Forget Password</Link>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              
              style={{
                marginTop: "10px",
                backgroundColor:"var(--primary-color)",
                color: "#fff",
                borderRadius:"7px",
                padding:"10px "
              }}
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={SignInSideImg}
          alt="Sign In"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default SignInPage;
