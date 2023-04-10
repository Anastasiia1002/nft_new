import React, { useState } from "react";

import { BoxContainer, BoxInputs } from "./Login.styled";
import { Box, Fab, TextField, Typography, Link } from "@mui/material";
import {
  authSignInGoogle,
  authSingInUser,
} from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log(email, password);
    if (!email || !password) {
      alert("Please enter your email and password");
      return;
    }
    console.log(dataUser);
    console.log(email, password);
    dispatch(authSingInUser(dataUser));
  
    setPassword("");
    setEmail("");
    navigate("/profile")
    console.log("hi");
  };
  const dataUser = {
    email,
    password,
  };

  return (
    <BoxContainer>
      <BoxInputs>
        <Typography align="center" variant="h4" color="white" mb={2}>
          Login
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            "& .MuiInputBase-input": { color: "pink" },
            "& .MuiInputBase-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
              "&:hover  .MuiOutlinedInput-notchedOutline": {
                borderColor: "lightPink",
              },
            },
            "& .MuiInputLabel-outlined": { color: "pink" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            defaultValue={email}
            onChange={(event) => setEmail(event.target.value)}
            label="Email"
            variant="outlined"
            autoComplete="on"
            type="email"
          />

          <TextField
            required
            defaultValue={password}
            onChange={(event) => setPassword(event.target.value)}
            label="Password"
            variant="outlined"
            autoComplete="on"
            type="password"
          />

          <Fab
            variant="extended"
            color="secondary"
            type="button"
            onClick={handleSubmit}
          >
            Login
          </Fab>
          <Fab
            variant="extended"
            color="secondary"
            type="button"
            onClick={() => dispatch(authSignInGoogle())}
          >
            Login with google
          </Fab>
          <Typography align="center" variant="caption" color="grey" mb={2}>
            <Link
              href={`/registration`}
              sx={{
                textDecoration: "none",
                color: "grey",
                "&:hover": { color: "pink" },
              }}
            >
              Create account!
            </Link>
          </Typography>
        </Box>
      </BoxInputs>
    </BoxContainer>
  );
};

export default Login;
