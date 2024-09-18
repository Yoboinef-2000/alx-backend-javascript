// Import required modules
const express = require('express');
const countStudents = require('./3-read_file_async');

// Create an instance of Express
const app = express();

// Define the route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the route for /students
app.get('/students', (req, res) => {
  const databasePath = process.argv[2]; // Get the database path from command line arguments

  // Send initial response
  res.write('This is the list of our students\n');

  // Call the countStudents function and handle its Promise
  countStudents(databasePath)
    .then((output) => {
      res.write(output);
      res.end();
    })
    .catch((error) => {
      res.write(error.message);
      res.end();
    });
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app for use in other modules
module.exports = app;
