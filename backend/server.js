require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/db');

const app = express();

// Global middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDatabase();

// Basic routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
