import React, { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";

interface LoginPageProps {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ isLogin, setIsLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

const handleLogin = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill in both email and password fields.");
    } else if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setIsLogin(!isLogin);
      localStorage.setItem("isLoggedIn", "true");
      console.log("Login successful. isLoggedIn set to true.");
    }
  };

  return (
    <Container maxWidth="sm" sx={loginContainerStyles}>
      <Paper
        component="form"
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          marginTop: "50px",
          boxShadow: "1px 2px 6px 1px rgba(0,0,0,0.2)",
          border: "2px solid #d3d3d3",
          borderRadius: "20px",
          height: "60vh",
          width: "70%",
        }}
      >
        <Typography
          fontFamily="Poppins"
          fontWeight="600"
          variant="h4"
          component="div"
          textAlign="center"
        >
          Login Here!
        </Typography>
        <TextField
          label="Email"
          fullWidth
          typeof="email"
          margin="normal"
          variant="standard"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="standard"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography variant="body2" color="error" textAlign="center">
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="button"
          style={buttonStyles}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
};

const loginContainerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop:"2rem"
};

const buttonStyles = {
  marginTop: "20px",
  width: "50%",
  alignSelf: "center",
  background: "grey",
  "&:hover": {
    background: "white",
    color: "black",
  },
};

export default LoginPage;
