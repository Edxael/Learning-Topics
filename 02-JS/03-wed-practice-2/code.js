

var data = [];

function rsvp(name, invites, email){
  this.name = name;
  this.invites = invites;
  this.email = email;
}

function addRecord(){

  var name = document.getElementById("input-1").value;
  var invites = document.getElementById("input-2").value;
  var email = document.getElementById("input-3").value;

  document.getElementById("input-1").value = "";
  document.getElementById("input-2").value = "";
  document.getElementById("input-3").value = "";

  if(name !== ""){
    var rsvpToPush = new rsvp(name, invites, email);
    data.push(rsvpToPush);
    console.log("Record added");

    document.getElementById("notes").innerHTML = name + " we send " + invites + " invites to your Email, thanks for RSVP";

    setTimeout(() => {
      document.getElementById("notes").innerHTML = "Pleae provide data and click RSVP";
    }, 4500);

  }

}
