import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

function Admcomred() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const socket = socketIOClient('http://localhost:8080');

    socket.on('complaint', (complaint) => {
      setComplaints((prevComplaints) => [...prevComplaints, complaint]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <h2>Complaints</h2>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint.id}>{complaint.subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default Admcomred;
