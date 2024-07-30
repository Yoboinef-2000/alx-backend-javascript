export default function getStudentsByLocation(theArray, city) {
  function lookForThisCity(student) {
    return student.location === city;
  }
  return theArray.filter(lookForThisCity);
}
