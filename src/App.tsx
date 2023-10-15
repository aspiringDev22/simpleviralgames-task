import { useState,useEffect } from "react";
import "./index.css";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setIsLogin(false); 
  }
  },[]); 
  return (
    <Box className="App">
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      {isLogin ? (
        <LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : (
        <Dashboard />
      )}
    </Box>
  );
}

export default App;
