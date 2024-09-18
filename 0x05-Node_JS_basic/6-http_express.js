// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app for use in other modules
module.exports = app;
