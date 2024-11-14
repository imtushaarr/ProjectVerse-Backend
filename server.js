const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const connectDB = require('../backend/config/database'); // Correct path to your DB connection
const ProjectRoutes = require('./routes/projectRoutes'); // Ensure correct path to your routes file
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const port = 5001;

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files (uploads directory for images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB(); // Use your DB connection function

// Register the routes
app.use('/api/projects', ProjectRoutes);

// Register the payment routes
app.use('/api/payment', paymentRoutes); // Route prefix

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});