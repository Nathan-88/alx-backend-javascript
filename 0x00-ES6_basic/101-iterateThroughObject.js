/* eslint-disable no-plusplus */
export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  for (let i = 0; i < reportWithIterator.length; i++) {
    string += reportWithIterator[i];
    if (i < reportWithIterator.length - 1) {
      string += ' | ';
    }
  }
  return string;
}
