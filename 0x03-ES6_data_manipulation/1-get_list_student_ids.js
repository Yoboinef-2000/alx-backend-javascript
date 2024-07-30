export default function getListStudentIds(theArray) {
  if (Array.isArray(theArray) === true) {
    return theArray.map((student) => student.id);
  }
  return [];
}
