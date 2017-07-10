console.log("Hello from code.js");

var guest_db = [];

function Rsvp(data1, data2, data3){
  this.name = data1;
  this.invites = data2;
  this.email = data3;
}

function addRecord(){
  var data1 = document.getElementById("inp-1").value;
  var data2 = parseInt(document.getElementById("inp-2").value);
  var data3 = document.getElementById("inp-3").value;

  document.getElementById("inp-1").value = "";
  document.getElementById("inp-2").value = "";
  document.getElementById("inp-3").value = "";

  if(data1 !== ""){
    console.log("Record Added");

    var record = new Rsvp(data1, data2, data3);
    guest_db.push(record);
    console.log(guest_db);

    document.getElementById("p1").innerHTML = data1 + " your " + data2 + " Invites will be sen to your email.";

    setTimeout(() => {
      document.getElementById("p1").innerHTML = "Please provide data, then click RSVP";
    }, 5000);
  }
}
