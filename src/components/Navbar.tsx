import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";

interface NavbarProps {
  isLogin:boolean;
  setIsLogin: (value:boolean)=>void;
}

const Navbar:React.FC<NavbarProps> = ({isLogin,setIsLogin}) => {
  return (
    <AppBar
      sx={navbarStyles}
    >
      <Toolbar>
        <Box sx={{...navContainerStyles,justifyContent:isLogin?"center":"space-between"}}>
          <Typography fontSize="1.4rem" fontWeight="700">SimpleViralGames</Typography>
         {
          !isLogin && <Button onClick={()=>setIsLogin(true)} sx={buttonStyles} variant="contained">Logout</Button>
         } 
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const navbarStyles = {
  position: "sticky",
  margin: "12px auto",
  borderRadius: "15px",
  background: "rgba(0,0,0,0.8)",
  top: "0px",
  width: "80%",
}

const navContainerStyles = {
  width:"100%",
  display:"flex",
  alignItems:"center"
}

const buttonStyles = {
  background:"grey",
  "&:hover":{
    background:"white",
    color:'black'
  }
}

export default Navbar;
