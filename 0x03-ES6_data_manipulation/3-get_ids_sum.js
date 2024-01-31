export default function getStudentIdsSum(StudentIds) {
  return StudentIds.reduce((total, obj) => total + obj.id, 0);
}
