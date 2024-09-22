// full_server/utils.js

import fs from 'fs';
import path from 'path';

/**
 * Reads the database file asynchronously.
 * @param {string} filePath - The path to the database file.
 * @returns {Promise<Object>} - A promise that resolves to an object containing arrays of first names per field.
 */
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(filePath), 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        lines.shift(); // Remove header

        const studentsByField = {};

        lines.forEach(line => {
          const [firstname, , , field] = line.split(',');

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }

          studentsByField[field].push(firstname);
        });

        resolve(studentsByField);
      }
    });
  });
}
