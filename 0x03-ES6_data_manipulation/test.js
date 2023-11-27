#!/usr/bin/node
const createStudent = (id, firstName, location) => ({
    id,
    firstName,
    location,
});

console.log(createStudent(1, "john", "abuja"))