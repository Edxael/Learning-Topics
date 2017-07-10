console.log("Hello from  code.js");

reservations_db = [];

function rsvp(data1, data2, data3){
  this.name = data1;
  this.invites = data2;
  this.email = data3;
}

function addRecord(){
  var data1 = document.getElementById("in-1").value;
  var data2 = document.getElementById("in-2").value;
  var data3 = document.getElementById("in-3").value;

  document.getElementById("in-1").value = "";
  document.getElementById("in-2").value = "";
  document.getElementById("in-3").value = "";

  if(data1 !== ""){
    var record = new rsvp(data1, data2, data3);
    reservations_db.push(record);
    console.log("Record Added.");
    console.log("");

    document.getElementById("p1").innerHTML = data1 + " thansk for RSVP, your " + data2 + " E-Invites will be send to yuur Email.";

    setTimeout(() => {
      document.getElementById("p1").innerHTML = "Please provide data, then click RSVP";
    }, 5000);
  }
}
