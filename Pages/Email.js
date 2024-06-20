import React, { useState, useEffect } from 'react';
import '../Style/Email.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import PrintIcon from '@mui/icons-material/Print';
import { Link, useNavigate } from 'react-router-dom'; // Importing necessary components from react-router-dom

const Email = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    axios.get('/api/emails')
      .then(response => {
        setEmails(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the emails!', error);
      });
  }, []);

  return (
    <div className="email-container">
      <div className="title">
        Your job has been scheduled.
      </div>
      <br /><br />
      <Button variant="contained" endIcon={<SendIcon />}>
        Send Email
      </Button>
      <br /><br /><br /><br />
      <Link to="/pj">
        <Button variant="contained" endIcon={<PrintIcon />}>
          Print Job Card
        </Button>
      </Link>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-text">
          <center>© 2023 - All Rights Reserved</center>
        </div>
      </footer>
    </div>
  );
};

export default Email;
