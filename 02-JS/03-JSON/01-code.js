console.log("Hello from code.js");

var person = {
  name: "Brad",
  age: 35,
  address: {
    street: "Hamilton No 238",
    city: "Provo",
    state: "Ut"
  },
  children: ["Alexia", "Ayumi"]
}


console.log(person);
console.log(person.name);
console.log("");

person = JSON.stringify(person);
console.log(person);
console.log(person.name);
console.log("");

person = JSON.parse(person);
console.log(person);
console.log(person.name);
console.log(person.address.city);
console.log("");
