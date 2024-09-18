const http = require('http');
const fs = require('fs');
const path = require('path');
const countStudents = require('./3-read_file_async'); // Assuming countStudents is in 3-read_file_async.js

// Create the server
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text
  res.setHeader('Content-Type', 'text/plain');

  // Handle the root URL '/'
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }

  // Handle the /students URL
  else if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    // Get the database path from command-line arguments
    const databasePath = process.argv[2];

    // Check if the database path exists
    if (!databasePath || !fs.existsSync(databasePath)) {
      res.end('Cannot load the database');
    } else {
      // Call countStudents function to read and display the student data
      countStudents(databasePath)
        .then((studentData) => {
          res.write(studentData);
          res.end();
        })
        .catch((error) => {
          res.end(error.message);
        });
    }
  }

  // Handle other URLs
  else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
