import React, { useState } from "react";
import { Drawer, Collapse } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MdOutlineManageAccounts } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AccessHubLogo from "../Assets/access-hub-logo.png"

const Sidebar = ({ isOpen, onMenuSelect }) => {
  const [openSection, setOpenSection] = useState(""); // Tracks which sublist is open
  const [selectedRoute, setSelectedRoute] = useState(""); // Tracks selected route
  const navigate = useNavigate();

  const menuData = [
    {
      title: "Application",
      icon: <HomeIcon />,
      subItems: [
        { label: "IT Asset", route: "/application/it-asset", icon: <MdOutlineManageAccounts /> },
        { label: "Manage Applications", route: "/application/manage-app-content", icon: <MdOutlineManageAccounts /> },
      ],
    },
    {
      title: "Settings",
      icon: <SettingsIcon />,
      subItems: [
        { label: "General", route: "/settings/general", icon: <MdOutlineManageAccounts /> },
        { label: "Email Templates", route: "/settings/email-templates", icon: <MdOutlineManageAccounts /> },
        { label: "Custom Schema Management", route: "/settings/custom-schema", icon: <MdOutlineManageAccounts /> },
        { label: "Manage User", route: "/settings/manage-native-user", icon: <MdOutlineManageAccounts /> },
        { label: "Manage Admin Roles", route: "/settings/manage-admin-roles", icon: <MdOutlineManageAccounts /> },
        { label: "Theme", route: "/settings/theme", icon: <MdOutlineManageAccounts /> },
      ],
    }
  ];

  const handleToggle = (section) => {
    setOpenSection((prev) => (prev === section ? "" : section)); // Toggle the section
  };

  const handleNavigation = (route) => {
    setSelectedRoute(route); // Update selected route
    navigate(route);
    onMenuSelect(route);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isOpen ? 300 : 60,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isOpen ? 300 : 60,
          overflowX: "hidden",
          transition: "width 0.3s",
          background: "var(--sidebar-bg-gradient)",
          color: "var(--text-primary-color)", // Dynamically set text color
        },
      }}
    >
      <div>
        <div style={{ borderBottom: "1px solid #434A60", textAlign: 'center', padding: "10px" }}>
          <img style={{ height: "50px", objectFit: "contain" }} src={AccessHubLogo} alt="" />
          <p style={{ textAlign: "center", margin: "0px", color: "var(--text-primary-color)" }}>Access Hub</p>
        </div>
        {menuData.map(({ title, icon, subItems, route }, index) => (
          <React.Fragment key={index}>
            {/* Main List Item */}
            <div
              onClick={() =>
                subItems ? handleToggle(title) : handleNavigation(route)
              }
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                cursor: "pointer",
                margin: "10px 0px",
                justifyContent: "space-between",
                backgroundColor:
                  selectedRoute === route && !subItems
                    ? "#3f51b5"
                    : "transparent",
                color: "var(--text-primary-color)", // Dynamically set text color
                borderRadius: "8px",
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {icon}
                {isOpen && <span style={{ marginLeft: "10px" }}>{title}</span>}
              </div>

              {isOpen && subItems && (openSection === title ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </div>

            {/* Sublist */}
            {subItems && (
              <Collapse in={openSection === title} timeout="auto" unmountOnExit>
                <div>
                  {subItems.map(({ label, route, icon }, subIndex) => (
                    <div
                      key={subIndex}
                      onClick={() => handleNavigation(route)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 20px",
                        marginLeft: isOpen ? "20px" : "10px",
                        marginRight: isOpen ? "10px" : "0px",
                        cursor: "pointer",
                        backgroundColor:
                          selectedRoute === route ? "var(--primary-color)" : "transparent",
                        color: selectedRoute === route ? "#fff" : "var(--text-secondary-color)", // Dynamically set text color
                        borderRadius: "8px",
                      }}
                    >
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </div>
    </Drawer>
  );
};

export default Sidebar;
