interface Person{
    firstName: string;
    lastName: string;
    age: number;
}
function introduce( person : Person) : void{
  console.log(`${person.firstName} ${person.lastName} is ${person.age} years old`);
}

const person : Person ={
    firstName: "Satyam",
    lastName: "Singh",
    age: 23
};

introduce(person);