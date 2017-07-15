// console.log("Hellof form the Code.js File.");

let invites_db = [];

function InviteConstructor(data1, data2, data3){
  this.name = data1;
  this.invites = data2;
  this.email = data3;
}

function addRecord(){
  let data1 = document.getElementById("in-1").value;
  let data2 = document.getElementById("in-2").value;
  let data3 = document.getElementById("in-3").value;

  console.log(data1, data2, data3);

  document.getElementById("in-1").value = "";
  document.getElementById("in-2").value = "";
  document.getElementById("in-3").value = "";

  if(data1 !== ""){
    let record = new InviteConstructor(data1, data2, data3);
    invites_db.push(record);
    console.log(invites_db);

    document.getElementById("p1").innerHTML = data1 + " your " + data2 + " Invites will be send to your E-Mail";

    setTimeout(() => {
      document.getElementById("p1").innerHTML = "Please provide information above and push RSVP";
    } ,4500);
  }
}
