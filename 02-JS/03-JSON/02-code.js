
var people = [
  {name: "Ayumi", age: 38},
  {name: "Hyolin", age: 27},
  {name: "Pausini", age: 41},
  {name: "Fey", age: 43}
];

var output = "";

for(x = 0; x < people.length; x++){
  output += "<p>" + people[x].name + " is: " + people[x].age + " years old." + "</p>"
}

document.getElementById("singers").innerHTML = output;
