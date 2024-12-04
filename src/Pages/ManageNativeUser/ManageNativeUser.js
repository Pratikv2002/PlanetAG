import React, { useState } from "react";
import CustomDataTable from "../../Componant/CustomDataTable";
import { FaRegEdit } from "react-icons/fa";
import { FiSettings, FiCopy } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { Tooltip } from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material"; // Material UI components

const ManageNativeUser = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState("");
  const [copiedItem, setCopiedItem] = useState(null); // Track the last copied item
  const [data, setData] = useState([
    {
      username: "johnsmith",
      firstname: "John",
      lastname: "Smith",
      email: "john.smith@example.com",
    },
    {
      username: "emilybrown",
      firstname: "Emily",
      lastname: "Brown",
      email: "emily.brown@example.com",
    },
    {
      username: "michaeljohnson",
      firstname: "Michael",
      lastname: "Johnson",
      email: "michael.johnson@example.com",
    },
    {
      username: "sarawilson",
      firstname: "Sara",
      lastname: "Wilson",
      email: "sara.wilson@example.com",
    },
    {
      username: "davidclark",
      firstname: "David",
      lastname: "Clark",
      email: "david.clark@example.com",
    },
    {
      username: "laurajones",
      firstname: "Laura",
      lastname: "Jones",
      email: "laura.jones@example.com",
    },
    {
      username: "jamesmiller",
      firstname: "James",
      lastname: "Miller",
      email: "james.miller@example.com",
    },
    {
      username: "annawilliams",
      firstname: "Anna",
      lastname: "Williams",
      email: "anna.williams@example.com",
    },
    {
      username: "robertdavis",
      firstname: "Robert",
      lastname: "Davis",
      email: "robert.davis@example.com",
    },
    {
      username: "karenmartin",
      firstname: "Karen",
      lastname: "Martin",
      email: "karen.martin@example.com",
    },
    {
      username: "christhomas",
      firstname: "Chris",
      lastname: "Thomas",
      email: "chris.thomas@example.com",
    },
    {
      username: "lisawalker",
      firstname: "Lisa",
      lastname: "Walker",
      email: "lisa.walker@example.com",
    },
    {
      username: "danielrobinson",
      firstname: "Daniel",
      lastname: "Robinson",
      email: "daniel.robinson@example.com",
    },
    {
      username: "julielee",
      firstname: "Julie",
      lastname: "Lee",
      email: "julie.lee@example.com",
    },
    {
      username: "matthewhall",
      firstname: "Matthew",
      lastname: "Hall",
      email: "matthew.hall@example.com",
    },
    {
      username: "katherineyoung",
      firstname: "Katherine",
      lastname: "Young",
      email: "katherine.young@example.com",
    },
    {
      username: "jasonhernandez",
      firstname: "Jason",
      lastname: "Hernandez",
      email: "jason.hernandez@example.com",
    },
    {
      username: "patriciaturner",
      firstname: "Patricia",
      lastname: "Turner",
      email: "patricia.turner@example.com",
    },
    {
      username: "nicholasmoore",
      firstname: "Nicholas",
      lastname: "Moore",
      email: "nicholas.moore@example.com",
    },
    {
      username: "victoriawhite",
      firstname: "Victoria",
      lastname: "White",
      email: "victoria.white@example.com",
    },
  ]);
  const [openForm, setOpenForm] = useState(false); // State to manage modal form visibility
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  
  });

  const handleStatusToggle = (id) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, active: !row.active } : row
      )
    );
  };

  const handlePreviewOpen = (content) => {
    setPreviewContent(content);
    setPreviewOpen(true);
  };

  const handlePreviewClose = () => {
    setPreviewOpen(false);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    console.log(text);
    setCopiedItem(text);
    setTimeout(() => setCopiedItem(null), 2000); // Reset tooltip after 2 seconds
  };

  const handleFormOpen = () => {
    setOpenForm(true);
  };

  const handleFormClose = () => {
    setOpenForm(false);
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here (e.g., add to data)
    console.log(formData);
    setOpenForm(false); // Close the form after submission
  };

  const CopyCell = ({ text }) => (
    <Tooltip title={copiedItem === text ? "Copied!" : text} arrow>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "250px",
        }}
      >
        <span
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "calc(100% - 30px)",
          }}
        >
          {text}
        </span>
        <FiCopy
          size={16}
          style={{
            cursor: "pointer",
            color: "#1976d2",
            minWidth: "16px",
          }}
          onClick={() => handleCopy(text)}
        />
      </div>
    </Tooltip>
  );

  const columns = [
    {
      name: "Username",
      selector: (row) => <div style={{fontWeight:"700",color:"var(--primary-color)"}}>{row.username}</div>,
      sortable: true,
       
    },
    {
      name: "First Name",
      selector: (row) => row.firstname,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastname,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    
    {
      name: "Actions",
      cell: (row) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <FaRegEdit onClick={() => console.log("Edit", row.id)} size={20} />
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Preview Modal */}
      {previewOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          <h3>Preview</h3>
          <pre>{previewContent}</pre>
          <button onClick={handlePreviewClose}>Close</button>
        </div>
      )}

      <div
        style={{ display: "flex", justifyContent: "end", margin: "8px 0px" }}
      >
        <button
          onClick={handleFormOpen}
          style={{
            borderRadius: "7px",
            background: "var(--primary-color)",
            color: "white",
            border: "none",
            padding: "8px 16px 8px 8px",
            fontSize: "1em",
          }}
        >
          <div style={{display:'flex',alignItems:'center'}}><MdAdd style={{fontWeight:"200",marginRight:"5px"}} size={20}/>
          Add User</div>
          
        </button>
      </div>

      {/* Form Dialog */}
      <Dialog open={openForm} onClose={handleFormClose} fullWidth maxWidth="sm">
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
        <TextField
      label="Username"
      variant="outlined"
      fullWidth
      margin="normal"
      value={formData.username}
      onChange={(e) =>
        setFormData({ ...formData, username: e.target.value })
      }
    />
    <TextField
      label="First Name"
      variant="outlined"
      fullWidth
      margin="normal"
      value={formData.firstName}
      onChange={(e) =>
        setFormData({ ...formData, firstName: e.target.value })
      }
    />
    <TextField
      label="Last Name"
      variant="outlined"
      fullWidth
      margin="normal"
      value={formData.lastName}
      onChange={(e) =>
        setFormData({ ...formData, lastName: e.target.value })
      }
    />
    <TextField
      label="Email"
      variant="outlined"
      fullWidth
      margin="normal"
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
    />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleFormSubmit}
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Custom DataTable */}
      <CustomDataTable title={"Manage User"}columns={columns} data={data} />
    </div>
  );
};

export default ManageNativeUser;
