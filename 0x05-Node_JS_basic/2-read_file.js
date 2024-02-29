const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = lines.map(line => line.split(',').map(item => item.trim()));

    const validStudents = students.filter(student => student.length === 4);
    validStudents.shift();
    console.log('Number of students:', validStudents.length);

    const counts = {};
    for (const student of validStudents) {
      const field = student[3];
      if (!counts[field]) {
        counts[field] = [];
      }
      counts[field].push(student[0]);
    }
    for (const field in counts) {
      console.log(`Number of students in ${field}: ${counts[field].length}. List: ${counts[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
