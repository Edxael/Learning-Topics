console.log("Hello from code.js");

var invites_db = [];

function Ersvp(data1, data2, data3){
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
    var record = new Ersvp(data1, data2, data3);
    invites_db.push(record);



    document.getElementById("p1").innerHTML = data1 + " your " + data2 + " E-Invites will be sed to your E-Mail";

    setTimeout( () => {
      document.getElementById("p1").innerHTML = "Please provide information above then click RSVP";
    },4500);
  }

}
