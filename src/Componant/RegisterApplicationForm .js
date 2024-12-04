import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const RegisterApplicationForm = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    applicationName: '',
    applicationType: '',
    applicationOuthType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // Handle form submission logic here
    handleClose(); // Close the dialog after submission
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Register Application</DialogTitle>
      <DialogContent>
        <TextField
          label="Application Name"
          name="applicationName"
          value={formData.applicationName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Application Type</InputLabel>
          <Select
            label="Application Type"
            name="applicationType"
            value={formData.applicationType}
            onChange={handleChange}
          >
            <MenuItem value="Web">Web</MenuItem>
            <MenuItem value="Mobile">Mobile</MenuItem>
            <MenuItem value="Desktop">Desktop</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Application OuthType</InputLabel>
          <Select
            label="Application OuthType"
            name="applicationOuthType"
            value={formData.applicationOuthType}
            onChange={handleChange}
          >
            <MenuItem value="OAuth2.0">OAuth2.0</MenuItem>
            <MenuItem value="JWT">JWT</MenuItem>
            <MenuItem value="BasicAuth">BasicAuth</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RegisterApplicationForm;
