import React from 'react';
import LoginButton from './LoginButton'; // Importing LoginButton component
import axios from 'axios';

// Defining Job functional component
const Job = () => {
  // Rendering JSX
  return (
    <div>
      {/* Other components or content */}
      
      {/* Rendering LoginButton component with a link to "/wl" */}
      <LoginButton to="/wl" />
      
      {/* More components or content */}
    </div>
  );
};

// Exporting Job component
export default Job;
