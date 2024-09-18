const fs = require('fs');

function countStudents(thePath) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(thePath, 'utf-8', (err, data) => {
      if (err) {
        // Reject with an error if the file cannot be loaded
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the file data into lines and filter out empty lines
      const lines = data.split('\n').filter(line => line.trim() !== '');

      if (lines.length <= 1) {
        resolve();
        return;
      }

      // Remove the header row
      lines.shift();

      // Initialize an object to store students by field
      const studentsByField = {};

      // Process each line
      lines.forEach(line => {
        const [firstname, lastname, age, field] = line.split(',');

        if (!firstname || !lastname || !age || !field) {
          return; // Skip malformed or incomplete lines
        }

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }

        // Add the student's first name to the corresponding field
        studentsByField[field].push(firstname);
      });

      // Calculate the total number of students
      const totalStudents = lines.length;
      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students in each field and their names
      for (const field in studentsByField) {
        const students = studentsByField[field];
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      resolve(); // Resolve the Promise after successfully processing the data
    });
  });
}

module.exports = countStudents;
