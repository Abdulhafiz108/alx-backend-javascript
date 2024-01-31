export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultgrade = 'N/A';
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrades
        .filter((grade) => grade.studentId === student.id)
        .pop() || defaultgrade).grade,
    }));
}
