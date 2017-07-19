
const guest_db = [];


class InviteConstructor{
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

  if((data1 !== "") && (data2 !== "") && (data3 !== "")){

    const record = new InviteConstructor(data1, data2, data3);
    guest_db.push(record);
    console.log(guest_db);

    document.getElementById("p1").innerHTML = `${data1} your ${data2} invites will be send to your E-Mail.`;

    setTimeout( () => {
      document.getElementById("p1").innerHTML = "Please provide info above and click RSVP";
    } , 4000);
  }

}
