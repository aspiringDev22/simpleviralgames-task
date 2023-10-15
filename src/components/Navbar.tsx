import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";

interface NavbarProps {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLogin, setIsLogin }) => {
  const handleLogOut=()=>{
    setIsLogin(true);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("gameList");
  }
  return (
    <AppBar sx={navbarStyles}>
      <Toolbar>
        <Box sx={{ ...navContainerStyles, justifyContent: isLogin ? "center" : "space-between" }}>
          <Typography fontSize="1.6rem" fontWeight="600" color="#484848" fontFamily="Poppins">
            SVG Task
          </Typography>
          {!isLogin && (
            <Button onClick={handleLogOut} sx={buttonStyles} variant="contained">
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const navbarStyles = {
  position: "sticky",
  background: "beige",
  top: "0px",
  width:'100vw',
  height:"12vh",
  display:'flex',
  justifyContent:"center",
};

const navContainerStyles = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding:'10px',
};

const buttonStyles = {
  background: "grey",
  "&:hover": {
    background: "#484848",
    color: "white",
  },
};

export default Navbar;
