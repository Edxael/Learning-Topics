console.log("Hello from Code.js");

var data = [];

function addName(){
  var name = document.getElementById("input-1").value;
  console.log(name);

  var newP = document.createElement("p");
  newP.innerHTML = name;
  newP.className = "nameClass";

  nameHolder.insertBefore(newP, nameHolder.childNodes[0]);

}
