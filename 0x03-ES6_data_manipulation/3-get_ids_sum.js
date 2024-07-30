export default function getStudentIdsSum(theArray) {
  function sum(previousElement, nextElement) {
    return previousElement + nextElement.id;
  }
  return theArray.reduce(sum, 0);
}
