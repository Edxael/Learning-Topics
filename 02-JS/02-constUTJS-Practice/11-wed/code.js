console.log("Hello from Code.js");

const invites_db =[];

class InviteRSVP {
  constructor(data1, data2, data3){
    this.name = data1;
    this.invites = data2;
    this.email = data3;
  }
}

function addRecord(){

  const data1 = document.getElementById("in-1").value;
  const data2 = document.getElementById("in-2").value;
  const data3 = document.getElementById("in-3").value;

  document.getElementById("in-1").value = "";
  document.getElementById("in-2").value = "";
  document.getElementById("in-3").value = "";

  if(data1 !== ""){
    const record = new InviteRSVP(data1, data2, data3);
    invites_db.push(record);
    console.log(invites_db);

    document.getElementById("p1").innerHTML = `${data1} your ${data2} will be send to your E-Mail`;

    setTimeout(() => {
      document.getElementById("p1").innerHTML = "Provide info above and click RSVP";
    } ,4000);
  }

}
