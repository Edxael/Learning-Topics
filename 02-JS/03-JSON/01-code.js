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


console.log(person);      // <--  Object {name: "Brad", age: 35, address: Object, children: Array(2)}
console.log(person.name); // <--  Brad


person = JSON.stringify(person);
console.log(person);       // <-- {"name":"Brad","age":35,"address":{"street":"Hamilton No 238","city":"Provo","state":"Ut"},"children":["Alexia","Ayumi"]}
console.log(person.name);  //<-- undefined


person = JSON.parse(person);
console.log(person);       // <--  Object {name: "Brad", age: 35, address: Object, children: Array(2)}
console.log(person.name);  // <--  Brad
console.log(person.address.city);  // <--  Provo
