// full_server/controllers/StudentsController.js

import { readDatabase } from '../utils.js';

export default class StudentsController {
  /**
   * Handles the GET /students request.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static getAllStudents(req, res) {
    const databasePath = process.argv[2] || './database.csv';

    readDatabase(databasePath)
      .then(studentsByField => {
        const fields = Object.keys(studentsByField).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        let response = 'This is the list of our students\n';

        fields.forEach(field => {
          const students = studentsByField[field];
          response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });

        res.status(200).send(response.trim());
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  /**
   * Handles the GET /students/:major request.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const allowedMajors = ['CS', 'SWE'];

    if (!allowedMajors.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const databasePath = process.argv[2] || './database.csv';

    readDatabase(databasePath)
      .then(studentsByField => {
        const students = studentsByField[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}
