import React, { useEffect, useState } from 'react';
import CustomDataTable from "../../Componant/CustomDataTable";
import { FaRegEdit } from "react-icons/fa"; 
import { FiSettings, FiCopy } from "react-icons/fi";
import { Tooltip } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material'; // Material UI components

const ManageAppContent = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState('');
  const [copiedItem, setCopiedItem] = useState(null);
 
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Application A',
      type: 'Web',
      apiToken: 'abcd1234-token',
      appUrl: 'https://appA.com',
      active: true,
    },
    {
      id: 2,
      name: 'Application B',
      type: 'Mobile',
      apiToken: 'xyz5678-token',
      appUrl: 'https://appB.com',
      active: false,
    },
    {
      id: 3,
      name: 'Application C',
      type: 'Web',
      apiToken: 'cdef9012-token',
      appUrl: 'https://appC.com',
      active: true,
    },
    {
      id: 4,
      name: 'Application D',
      type: 'Mobile',
      apiToken: 'ghij3456-token',
      appUrl: 'https://appD.com',
      active: false,
    },
    {
      id: 5,
      name: 'Application E',
      type: 'Desktop',
      apiToken: 'klmn7890-token',
      appUrl: 'https://appE.com',
      active: true,
    },
    {
      id: 6,
      name: 'Application F',
      type: 'Web',
      apiToken: 'pqrs1234-token',
      appUrl: 'https://appF.com',
      active: true,
    },
    {
      id: 7,
      name: 'Application G',
      type: 'Mobile',
      apiToken: 'tuvw5678-token',
      appUrl: 'https://appG.com',
      active: false,
    },
    {
      id: 8,
      name: 'Application H',
      type: 'Web',
      apiToken: 'xyza9012-token',
      appUrl: 'https://appH.com',
      active: true,
    },
    {
      id: 9,
      name: 'Application I',
      type: 'Desktop',
      apiToken: 'bcde3456-token',
      appUrl: 'https://appI.com',
      active: false,
    },
    {
      id: 10,
      name: 'Application J',
      type: 'Mobile',
      apiToken: 'fgij7890-token',
      appUrl: 'https://appJ.com',
      active: true,
    },
    {
      id: 11,
      name: 'Application K',
      type: 'Web',
      apiToken: 'hjkl1234-token',
      appUrl: 'https://appK.com',
      active: true,
    },
    {
      id: 12,
      name: 'Application L',
      type: 'Mobile',
      apiToken: 'mnop5678-token',
      appUrl: 'https://appL.com',
      active: false,
    },
    {
      id: 13,
      name: 'Application M',
      type: 'Desktop',
      apiToken: 'qrst9012-token',
      appUrl: 'https://appM.com',
      active: true,
    },
    {
      id: 14,
      name: 'Application N',
      type: 'Web',
      apiToken: 'uvwx3456-token',
      appUrl: 'https://appN.com',
      active: true,
    },
    {
      id: 15,
      name: 'Application O',
      type: 'Mobile',
      apiToken: 'yzab7890-token',
      appUrl: 'https://appO.com',
      active: false,
    },
    {
      id: 16,
      name: 'Application P',
      type: 'Desktop',
      apiToken: 'cdef1234-token',
      appUrl: 'https://appP.com',
      active: true,
    },
    {
      id: 17,
      name: 'Application Q',
      type: 'Web',
      apiToken: 'ghij5678-token',
      appUrl: 'https://appQ.com',
      active: false,
    },
    {
      id: 18,
      name: 'Application R',
      type: 'Mobile',
      apiToken: 'klmn9012-token',
      appUrl: 'https://appR.com',
      active: true,
    },
    {
      id: 19,
      name: 'Application S',
      type: 'Web',
      apiToken: 'pqrs3456-token',
      appUrl: 'https://appS.com',
      active: true,
    },
    {
      id: 20,
      name: 'Application T',
      type: 'Desktop',
      apiToken: 'tuvw7890-token',
      appUrl: 'https://appT.com',
      active: false,
    },
  
  ]);

  useEffect(()=>{

  },[data])
  const [openForm, setOpenForm] = useState(false); // State to manage modal form visibility
  const [formData, setFormData] = useState({
    appName: '',
    appType: '',
    oauthType: '',
    dynamicFields: {},
  });

  const applicationTypes = [
    "ATG Web Commerce", "AWS", "Active Directory", "Active Directory Collector",
    "Azure", "Centrify", "Database", "Database Collector", "Salesforce"
  ];

  // Dynamic fields for each application type
  const applicationDynamicFields = {
    Salesforce: [
      { name: "clientId", label: "Client ID" },
      { name: "clientSecret", label: "Client Secret" },
      { name: "endpoint", label: "Endpoint" },
      { name: "username", label: "Username" },
      { name: "password", label: "Password" },
      { name: "securityToken", label: "Security Token" },
      { name: "enableAutoRetry", label: "Enable Auto Retry", type: "boolean" },
      { name: "autoRetryInterval", label: "Auto Retry Interval (ms)" },
      { name: "maximumAutoRetry", label: "Maximum Auto Retry" },
    ],
    AWS: [
      { name: "accessKeyId", label: "Access Key ID" },
      { name: "secretAccessKey", label: "Secret Access Key" },
      { name: "region", label: "Region" },
    ],
    "Active Directory": [
      { name: "domainName", label: "Domain Name" },
      { name: "adminUsername", label: "Admin Username" },
      { name: "adminPassword", label: "Admin Password" },
    ],
    Database: [
      { name: "databaseType", label: "Database Type" },
      { name: "connectionString", label: "Connection String" },
      { name: "username", label: "Username" },
      { name: "password", label: "Password" },
    ],
    Default: [
      // { name: "genericField1", label: "Generic Field 1" },
      // { name: "genericField2", label: "Generic Field 2" },
    ],
  };

  const handleDynamicFieldChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      dynamicFields: {
        ...prev.dynamicFields,
        [fieldName]: value,
      },
    }));
  };

  const renderDynamicFields = () => {
    const fields =
      applicationDynamicFields[formData.appType] ||
      applicationDynamicFields["Default"];
    return fields.map((field) => {
      if (field.type === "boolean") {
        return (
          <FormControl key={field.name} fullWidth margin="normal">
            <InputLabel>{field.label}</InputLabel>
            <Select
              value={formData.dynamicFields[field.name] || ""}
              onChange={(e) =>
                handleDynamicFieldChange(field.name, e.target.value)
              }
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
        );
      }
      return (
        <TextField
          key={field.name}
          label={field.label}
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.dynamicFields[field.name] || ""}
          onChange={(e) =>
            handleDynamicFieldChange(field.name, e.target.value)
          }
        />
      );
    });
  };

  const handleStatusToggle = (id) => {
    setData((prevData) => {
      const updatedData = prevData.map((row) =>
        row.id === id ? { ...row, active: !row.active } : row
      );
      return updatedData; // Trigger a re-render with the updated data
    });
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

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here (e.g., add to data)
    console.log(formData);
    setOpenForm(false); // Close the form after submission
  };

  const CopyCell = ({ text }) => (
    <Tooltip title={copiedItem === text ? 'Copied!' : text} arrow>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '250px',
        }}
      >
        <span
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: 'calc(100% - 30px)',
          }}
        >
          {text}
        </span>
        <FiCopy
          size={16}
          style={{
            cursor: 'pointer',
            color: '#1976d2',
            minWidth: '16px',
          }}
          onClick={() => handleCopy(text)}
        />
      </div>
    </Tooltip>
  );

  const columns = [
    {
      name: 'Application Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Type',
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: 'API Token',
      cell: (row) => (
        <CopyCell text={row.apiToken} />
      ),
    },
    {
      name: 'App URL',
      cell: (row) => (
        <CopyCell text={row.appUrl} />
      ),
    },
    {
      name: 'Active',
      cell: (row) => (
        <button
          onClick={() => handleStatusToggle(row.id)}
          style={{
            backgroundColor: row.active ? '#4CAF50' : '#F44336', // Green & Red shades
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          {row.active ? 'Active' : 'Inactive'}
        </button>
      ),
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div style={{ display: "flex", gap: "10px" }}> 
           <FaRegEdit onClick={() => console.log('Edit', row.id)} size={20} />
           <FiSettings onClick={() => console.log('Setting', row.id)} size={20} />
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
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#fff',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        >
          <h3>Preview</h3>
          <pre>{previewContent}</pre>
          <button onClick={handlePreviewClose}>Close</button>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'end', margin: "8px 0px" }}>
        <button
          onClick={handleFormOpen}
          style={{
            borderRadius: "7px",
            background: "var(--primary-color)",
            color: "white",
            border: "none",
            padding: "8px 16px",
            fontSize:'1em'
          }}
        >
          Register Application
        </button>
      </div>

      {/* Form Dialog */}
      <Dialog open={openForm} onClose={handleFormClose} fullWidth maxWidth="sm">
        <DialogTitle>Register New Application</DialogTitle>
        <DialogContent>
          <TextField
            label="Application Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.appName}
            onChange={(e) => handleInputChange("appName", e.target.value)}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Application Type</InputLabel>
            <Select
              value={formData.appType}
              onChange={(e) => handleInputChange("appType", e.target.value)}
              label="Application Type"
            >
              {applicationTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Auth Type</InputLabel>
            <Select
              value={formData.oauthType}
              onChange={(e) => handleInputChange("oauthType", e.target.value)}
              label="Auth Type"
            >
              <MenuItem value="OAuth2">OAuth2</MenuItem>
              <MenuItem value="OAuth1">OAuth1</MenuItem>
              <MenuItem value="SAML">SAML</MenuItem>
              <MenuItem value="BasicAuth">Basic Auth</MenuItem>
            </Select>
          </FormControl>
          {/* Dynamic Fields */}
          {renderDynamicFields()}
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
      <CustomDataTable  title={"Applications Management"} columns={columns} data={data} />
    </div>
  );
};

export default ManageAppContent;
