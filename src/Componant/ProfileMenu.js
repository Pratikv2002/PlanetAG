import React from "react";
import { Menu, MenuItem } from "@mui/material";

const ProfileMenu = ({ anchorEl, isOpen, onClose }) => {
  return (
    <Menu anchorEl={anchorEl} open={isOpen} onClose={onClose}>
      <MenuItem
        sx={{
          "&:hover": {
            backgroundColor: "var(--menu-hover-color)",
          },
        }}
        onClick={onClose}
      >
        Logout
      </MenuItem>
      <MenuItem onClick={onClose}>Password Reset</MenuItem>
      <MenuItem onClick={onClose}>Admin</MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
