import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const customStyles = {
  table: {
    style: {
      borderRadius: '10px 10px 0px 0px',
      overflow: 'hidden',
      border: '1px solid #ccc',
      borderBottom: 'none',
    },
  },
  header: {
    style: {
      backgroundColor: '#f9fafb',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px',
    },
  },
  headRow: {
    style: {
      backgroundColor: '#f9fafb',
      color: 'white',
    },
  },
  headCells: {
    style: {
      fontWeight: 'bold',
      color: '#667085',
    },
  },
  rows: {
    style: {
      borderBottom: '1px solid #ccc',
      minHeight: '50px',
    },
    // Hover styles with higher specificity
    highlightOnHoverStyle: {
      backgroundColor: 'var(--primary-light-color)', // Lighter shade of #635bff
    },
  },
  pagination: {
    style: {
      border: '1px solid #ccc',
      borderRadius: '0px 0px 10px 10px',
      padding: '5px',
      borderTop: 'none',
    },
  },
  paginationButton: {
    style: {
      padding: '5px 10px',
      margin: '0 5px',
    },
  },
};

const CustomDataTable = ({ title, columns, data }) => {
  const [searchText, setSearchText] = useState(""); // State for search input
  const [filteredData, setFilteredData] = useState(data);

  useEffect(()=>{
    setFilteredData(data)
  },[data])

  // Handle search and filter the data
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
      // Default search logic if no search function is passed
      const filteredRows = data.filter((row) =>
        Object.values(row)
          .join(" ") // Join all the values in the row to search in the whole row
          .toLowerCase()
          .includes(value.toLowerCase()) // Case-insensitive search
      );
      setFilteredData(filteredRows); // Update the filtered data state
  };

  return (
    <div>
      {/* Custom Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        {/* Title */}
        <h2 style={{ margin: 0, fontSize: "18px", color: "#333" }}>{title}</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearch}
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "300px",
            fontSize: "14px",
          }}
        />
      </div>

      {/* DataTable */}
      <DataTable
        columns={columns}
        data={filteredData} // Use filteredData here
        pagination
        highlightOnHover
        responsive
        customStyles={customStyles} // Apply custom styles
      />
    </div>
  );
};

export default CustomDataTable;
