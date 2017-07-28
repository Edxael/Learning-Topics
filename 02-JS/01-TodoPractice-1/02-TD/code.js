console.log("Hello from Code.js");

var tasks_db = [];

class TaskConstructor {
  constructor(duty) {
    this.task = duty;
    this.done = false;
  }
}



function addTask(){

  if(document.getElementById("in-1").value !== ""){
    const duty = document.getElementById("in-1").value;
    document.getElementById("in-1").value = "";
    const taskToadd = new TaskConstructor(duty);

    tasks_db.push(taskToadd);
    display()
  }
}



function delTask(){

  for(var d = 0; d < tasks_db.length; d++){
    if(tasks_db[d].done){
      console.log("Deleting");
      delete tasks_db[d];
    }
  }

  tasks_db = tasks_db.filter(function(n){return n != undefined});
  display()
}




function display(){

  if(tasks_db.length == 0){
    document.getElementById("divHolderId").innerHTML = "No tasks to do yet..."
  }else{

    document.getElementById("divHolderId").innerHTML = "";
    var taskHolder = document.getElementById("divHolderId");

    for(x in tasks_db){

      var taskNode = document.createElement("div");
      taskNode.className = "div-task";
      taskNode.appendChild(createCBox(x));
      taskNode.appendChild(createPar(tasks_db[x].task));

      taskHolder.insertBefore(taskNode, divHolderId.childNodes[0]);
    }
  }

}



function createCBox(x){

  var cb = document.createElement("input");
  cb.type = "checkBox";
  cb.className = "cb-cl";
  cb.setAttribute('onClick', "markAcomplishTask(" + x + ")");

  return cb;
}



function createPar(text){

  var pr = document.createElement("p");
  pr.className = "pr-cl";
  pr.innerHTML = text;

  return pr;
}



function markAcomplishTask(done){

  for(x = 0; x < tasks_db.length; x++){
    if(x === done){
      tasks_db[x].done = true;
    }
  }

}
