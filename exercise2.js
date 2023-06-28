function introduce(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName, " is ").concat(person.age, " years old"));
}
var person = {
    firstName: "Satyam",
    lastName: "Singh",
    age: 23
};
introduce(person);
