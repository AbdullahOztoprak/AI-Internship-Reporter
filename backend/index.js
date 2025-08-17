const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple API endpoint for generating reports
app.post('/generate-report', (req, res) => {
  const { notes } = req.body;
  // For now, just return a placeholder response
  res.json({
    report: `This is a placeholder report for your notes: "${notes}"`
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});