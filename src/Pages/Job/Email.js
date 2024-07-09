import React, { useState } from 'react';

// Defining Email functional component
const Email = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('A new job was allocated');
  const [text, setText] = useState('Please see the site for more details');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      to: to,
      subject: subject,
      text: text,
    };

    // Send email
    const response = await fetch('http://localhost:8080/api/auth/email/send', {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          To:
          <input type="email" value={to} onChange={(e) => setTo(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Text:
          <textarea value={text} onChange={(e) => setText(e.target.value)} required />
        </label>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Email;
