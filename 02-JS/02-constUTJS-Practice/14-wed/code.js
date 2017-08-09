
console.log("Hello from code.js");

const info_db = [];

class InviteConstructor{
  constructor(data1, data2, data3){
    this.name = data1;
    this.invites = data2;
    this.email = data3;
  }
}


const addRecord = () => {
  const data1 = document.getElementById("in-1").value;
  const data2 = document.getElementById("in-2").value;
  const data3 = document.getElementById("in-3").value;

  document.getElementById("in-1").value = "";
  document.getElementById("in-2").value = "";
  document.getElementById("in-3").value = "";

  if(data1 !== ""){

    const record = new InviteConstructor(data1, data2, data3);
    info_db.push(record);
    console.log(info_db);

    document.getElementById("info").innerHTML = `${data1} your ${data2} invites, will be send to the Email: ${data3}`;

    setTimeout( () => {
      document.getElementById("info").innerHTML = "Provide info above then press RSVP";
    }, 6000 );
  }
}
