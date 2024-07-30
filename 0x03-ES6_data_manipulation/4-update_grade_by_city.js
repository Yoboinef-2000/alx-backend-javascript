export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  const studentsWithGrades = studentsInCity.map((student) => {
    const gradeEntry = newGrades.find((entry) => entry.studentId === student.id);
    const updatedStudent = {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
    };
    updatedStudent.grade = gradeEntry ? gradeEntry.grade : 'N/A';
    return updatedStudent;
  });
  return studentsWithGrades;
}
