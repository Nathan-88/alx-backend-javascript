// This function will return an iterator to go through every employee in every department.
export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const arr = [];
  for (const values of Object.values(allEmployees)) {
    arr.push(...values);
  }
  return arr;
}
