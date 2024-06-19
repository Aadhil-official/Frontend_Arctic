import React, { useState } from 'react';
import axios from 'axios';
import '../Style/Joballocation.css'; // Importing styles for the component
import Tabs from '../Components/Tabs'; // Importing Tabs component
import Button from '@mui/material/Button';


// Defining functional component JobAllocation
const JobAllocation = () => {
  const buttonData = [
    { label: 'Job ID' },
    { label: 'User group id' },
    { label: 'Location' },
    { label: 'Vehicle number' },
    { label: 'Job Details' },
  ];

  const [jobAllocations, setJobAllocations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    axios.get("http://localhost:8080/api/joballocation")
      .then(response => {
        setJobAllocations(response.data);
        setLoading(false);
        alert("Data fetched successfully!");
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  };

  // Returning JSX
  return (
    <>

      <div className="main-content">
        {/* Header */}
        
        <div className="title">
          Job Allocation
        </div>

        {/* Tabs */}
        <Tabs buttonData={buttonData} />

        {/* Fetch Button */}
        <div className="button" onClick={fetchData}>
        <Button variant="contained">Allocate Job</Button>
        </div>

        {/* Job Allocations List */}
        <div className="job-allocations">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {jobAllocations.map((allocation, index) => (
                <li key={index}>
                  <p><strong>Job ID:</strong> {allocation.jobId}</p>
                  <p><strong>User Group ID:</strong> {allocation.userGroupId}</p>
                  <p><strong>Location:</strong> {allocation.location}</p>
                  <p><strong>Vehicle Number:</strong> {allocation.vehicleNumber}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-text">
          <center>© 2023 - All Rights Reserved</center> 
          </div>
        </footer>
      </div>
    </>
  );
};

export default JobAllocation;
