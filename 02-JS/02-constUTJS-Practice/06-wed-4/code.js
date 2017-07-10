console.log("Hello from Code.js ");

var guest_db = [];

function ConsRSVP(data1, data2, data3){
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
    var record = new ConsRSVP(data1, data2, data3);
    guest_db.push(record);

    console.log(guest_db);

    document.getElementById("root").innerHTML = data1 + " your " + data2 + " will be send to your E-Mail.";

    setTimeout(() => document.getElementById("root").innerHTML = "Provide information requested above and click RSVP" , 4500 );

  }
}
