import React, { useState } from "react";
import "../../Style/Job/Email.css";
import axios from "axios";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import PrintIcon from "@mui/icons-material/Print";
import { useLocation, useNavigate } from "react-router-dom";

const Email = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const teamMembers = queryParams.get("teamMembers");
  const Members = queryParams.get("Members");
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    const members = teamMembers.split(",");

    try {
      for (const member of members) {
        console.log(member);
        const data = {
          to: member,
          subject,
          text,
        };

        const response = await axios.post(
          "http://localhost:8080/email/send",
          data
        );

        if (response.status === 200) {
          console.log(`Email sent successfully to ${member}`);
        } else {
          console.error(`Failed to send email to ${member}`);
        }
      }
    } catch (error) {
      console.error("Error sending emails:", error);
    }
  };

  const handleNavigate = () => {
    navigate(`/pj?Members=${Members}`);
  };

  return (
    <div className="email-container">
      <div className="title">Your job has been scheduled.</div>
      <br />
      <br />
      <div className="Button">
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
        Send Email
      </Button>
      <br />
      <br />
      <br />
      <br />
      <Button variant="contained" endIcon={<PrintIcon />}  onClick={handleNavigate}>
        Print Job Card
      </Button>
      </div>
      <footer className="footer">
        <div className="footer-text">
          <center>© 2023 - All Rights Reserved</center>
        </div>
      </footer>
    </div>
  );
};

export default Email;
