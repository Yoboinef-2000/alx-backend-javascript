const laFiles = require('fs');

function countStudents(thePath) {
  try {
    // Read the file synchronously
    const data = laFiles.readFileSync(thePath, 'utf-8');

    // Split data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header row
    lines.shift();

    // Initialize an object to store the students by field
    const studentsByField = {};

    // Iterate over each line and process student data
    lines.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      // Add the first name to the corresponding field's array
      studentsByField[field].push(firstname);
    });

    // Log the total number of students
    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and the list of first names
    for (const field in studentsByField) {
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        const students = studentsByField[field];
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
    }

  } catch (err) {
    // Throw an error if the file can't be read
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
