// console.log("Hello from Code.js 3");

var database = [];


function rsvp(data1, data2, data3){
  this.name = data1;
  this.invites = data2;
  this.email = data3;
}

function addRecord(){
  var data1 = document.getElementById("input-1").value;
  var data2 = document.getElementById("input-2").value;
  var data3 = document.getElementById("input-3").value;

  document.getElementById("input-1").value = "";
  document.getElementById("input-2").value = "";
  document.getElementById("input-3").value = "";

  if(data1 !== ""){
    var record = new rsvp(data1, data2, data3);
    database.push(record);
    console.log("Record Added.");

    document.getElementById("p1").innerHTML = data1 + " your " + data2 + " E-Invites will be send to your Email.";

    setTimeout(() => {
      document.getElementById("p1").innerHTML = "Provide your info and click RSVP.";
    }, 5000);
  }
}
