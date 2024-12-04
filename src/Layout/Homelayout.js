import React from "react";
import { Box, Toolbar } from "@mui/material";
import Sidebar from "../Componant/Sidebar"; // Your Sidebar component
import Navbar from "../Componant/Navbar"; // Your Navbar component

const drawerWidth = 240;

const HomeLayout = ({ Page }) => {
  return (
    <div style={{ display: "flex" }}>
      {/* Navbar */}
      <div> 
        <Navbar drawerWidth={drawerWidth} />
      </div>
      

      {/* Sidebar */}
      <Sidebar isOpen={true} onMenuSelect={(route) => console.log(route)} />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "white", 
          minHeight: "100%",
        }}
      >
        <Toolbar />
        {Page}
      </Box>
    </div>
  );
};

export default HomeLayout;
