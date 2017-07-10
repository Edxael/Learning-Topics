
var data = [];


function rsvp(name, number, email){
  this.name = name;
  this.reservations = number;
  this.email = email;
}


function addName(){
  var name = document.getElementById("input-1").value;
  var number = document.getElementById("input-2").value;
  var email = document.getElementById("input-3").value;

  document.getElementById("input-1").value = "";
  document.getElementById("input-2").value = "";
  document.getElementById("input-3").value = "";

  if(name !== ""){
    var rsvpToPush = new rsvp(name, number, email);
    data.push(rsvpToPush);
  }

  document.getElementById("thanks").innerHTML = name + " you have " + number + " reservations, thanks for RSVP" ;

  setTimeout(() => {
    document.getElementById("thanks").innerHTML = "Please provide info and then Click RSVP";
  }, 3000);



}
