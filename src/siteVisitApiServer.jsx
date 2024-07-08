const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from all origins during development
app.use(cors());

// Example API endpoint
app.post('/api/v1/siteVisitStEd/start/:id', (req, res) => {
  const { id } = req.params;
  // Implement logic to start site visit with id
  res.json({ message: `Started site visit with id ${id}` });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
