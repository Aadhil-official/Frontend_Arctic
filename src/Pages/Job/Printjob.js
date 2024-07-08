import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../Style/Job/Printjob.css';

const storedTeamMembers = JSON.parse(localStorage.getItem('teamMembers'));

export default function JobAllocationCard() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    axios.get('your-api-endpoint')
      .then(response => {
        const apiData = response.data.rows.map((row, index) => ({ id: index, ...row }));

        const teamMembersData = storedTeamMembers ? storedTeamMembers.map((member, index) => ({
          id: apiData.length + index,
          employeeName: member.employeeName,
          employeePhone: member.employeePhone,
          employeeDesignation: member.employeeDesignation,
          employeeEmail: member.employeeEmail
        })) : [];

        setRows([...apiData, ...teamMembersData]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ width: '100%', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Job Allocation Card</h1>
      {storedTeamMembers ? (
        <div>
          <h2 style={{ textAlign: 'center', marginBottom: '20px',color:'Black' }}>Team Members:</h2>
          <table style={{
            width: '100%', borderCollapse: 'collapse', marginBottom: '20px'
          }}>
            <thead>
              <tr>
                <th style={{
                  border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2'
                }}>Name</th>
                <th style={{
                  border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2'
                }}>Phone</th>
                <th style={{
                  border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2'
                }}>Designation</th>
                <th style={{
                  border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2'
                }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {storedTeamMembers.map((member, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{member.employeeName}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{member.employeePhone}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{member.employeeDesignation}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{member.employeeEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 style={{ textAlign: 'center' }}>No team members found</h2>
      )}
      <div style={{ textAlign: 'center' }}>
        <button onClick={handlePrint} className="print-button" style={{
          padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white',
          border: 'none', borderRadius: '5px', cursor: 'pointer'
        }}>Print</button>
      </div>
      <div className="footer">
        <div className="footer-text">
          <center>© 2023 - All Rights Reserved</center>
        </div>
      </div>
    </div>
  );
}
