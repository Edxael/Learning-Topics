console.log("Hello from code.js");

var data = [];

function TaskConstructor(text){
  this.task = text;
  this.done = false;
}


function addTask(){
  var newTask = document.getElementById("input-1").value;
  document.getElementById("input-1").value = "";

  if(newTask !== ""){
    var taskToPush = new TaskConstructor(newTask);
    data.push(taskToPush);
    console.log(data);
  }

  display();
}


function deleteTask(){
  for(x = 0; x < data.length; x++){
    if(data[x].done === true){
      delete data[x];
    }
  }

  data = data.filter((x) => x !== undefined);
  display();
}


function display(){
  var taskHolder = document.getElementById("root");

  if(data.length > 0){
    document.getElementById("root").innerHTML = "";
  }


  for(x in data){
    var newDiv = document.createElement("div");

    newDiv.className = "div-task";
    newDiv.appendChild(createCheckBox(x));
    newDiv.appendChild(createParagraph(data[x]["task"]));

    taskHolder.insertBefore(newDiv, root.childNodes[0]);
  }

}


function createCheckBox(x){
  var checkBox = document.createElement("input");

  checkBox.type = "checkBox";
  checkBox.className = "checkBox-class";
  checkBox.setAttribute('onClick', "markAcomplishTask(" + x + ")")

  return checkBox;
}


function createParagraph(text){
  var par1 = document.createElement("p");

  par1.innerText = text;
  par1.className = "p-class";

  return par1;
}



function markAcomplishTask(postx){
  for(x = 0; x < data.length; x++){
    if(x === postx){
      data[x].done = true;
    }
  }
}
