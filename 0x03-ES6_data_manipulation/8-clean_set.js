export default function cleanSet(set, startString) {
  let result = '';
  if (startString === '') {
    return '';
  }

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const remainingString = value.slice(startString.length);
      if (result.length > 0) {
        result += '-';
      }
      result += remainingString;
    }
  }
  return result;
}
