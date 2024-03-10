// app.js

const express = require('express');
const app = express();
const uploadRouter = require('./routes/upload');

// Middleware to parse JSON bodies
app.use(express.json());

// Route for file uploads
app.use('/api/upload', uploadRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
