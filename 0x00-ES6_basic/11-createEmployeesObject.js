export default function createEmployeesObject(departmentName, employees) {
  return {
    [`${departmentName}`]: [...employees],
  }; // dynamically setting the property name of the object to the value of departmentName
}