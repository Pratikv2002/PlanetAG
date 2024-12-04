import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userImg from "../Assets/userImg.png";
import { FaRegUser, FaUserAlt } from "react-icons/fa"; // Import React Icons
import { LuSettings } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

const Navbar = ({ drawerWidth, userName, userImage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleProfileClick = () => {
    navigate("/profile"); // Navigate to the profile page
    setMenuOpen(false);
  };
  const handleSettingsClick = () => {};

  const handleLogout = () => {
    // Perform logout logic (e.g., clear authentication token)
    setMenuOpen(false);
    navigate("/sign-in"); // Redirect to login page
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: `${drawerWidth}px`,
        right: 0,
        // backgroundColor: "#3f51b5",
        color: "#fff",
        zIndex: 1000,
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        borderBottom: "1px solid #DCDFE4",
        backgroundColor: "white",
        //  boxShadow: '1px 1px 10px #ccc'
      }}
    >
      {/* Left side: Menu Icon */}
      {/* <div style={{ display: "flex", alignItems: "center" }}>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          &#9776; 
        </button>
        <h6 style={{ marginLeft: "15px", marginBottom: 0 }}>Devias Kit Navbar</h6>
      </div> */}

      {/* Right side: User Avatar and Username */}
      <div
        style={{ display: "flex", alignItems: "center", position: "relative" }}
      >
        <img
          src={userImg}
          alt={userImg}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={handleMenuToggle}
        />
        {/* <span style={{ marginLeft: "10px", color: "black" }}>userName</span> */}

        {/* User Menu */}
        {menuOpen && (
          <div
            style={{
              position: "absolute",
              top: "35px",
              right: "0",
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "5px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              width: "200px", // Adjusted width
              padding: "10px",
              zIndex: 9999,
            }}
          >
            {/* User Information */}
            <div style={{ marginBottom: "10px" }}>
              <p style={{ margin: 0, fontWeight: "bold" }}>John Doe</p>
              <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
                johndoe@example.com
              </p>
            </div>

            {/* Horizontal Line */}
            <hr style={{ border: "1px solid #ddd", marginBottom: "10px" }} />

            {/* List of Menu Items */}
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              <li
                onClick={handleProfileClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  cursor: "pointer",
                  color: "#000",
                  marginBottom: "5px",
                  borderRadius: "4px",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                <FaRegUser style={{ marginRight: "10px",color:"#888" }} />
                <span>My Profile</span>
              </li>

              <li
                onClick={handleSettingsClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  cursor: "pointer",
                  color: "#000",
                  marginBottom: "5px",
                  borderRadius: "4px",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                <LuSettings style={{ marginRight: "10px", color:"#888" }} />
                <span>Settings</span>
              </li>

              <li
                onClick={handleLogout}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  cursor: "pointer",
                  color: "#000",
                  marginBottom: "5px",
                  borderRadius: "4px",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                <MdLogout style={{ marginRight: "10px",color:"#888" }} />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
