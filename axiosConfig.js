// axiosConfig.js

// Importing axios library
import axios from 'axios';

// Creating an instance of axios with custom configuration
const api = axios.create({
    // Setting the base URL for API requests
    baseURL: 'http://localhost:8080/', 
    // Configuring default headers for requests
    headers: {
        'Content-Type': 'application/json', // Setting content type to JSON
    },
});

// Exporting the configured axios instance for use in other parts of the application
export default api;
