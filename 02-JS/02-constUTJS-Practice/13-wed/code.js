console.log("code.js");

const reservations_db = [];


class RecordConstructor {
  constructor(data1, data2, data3) {
    this.name = data1;
    this.invites = data2;
    this.email = data3;
  }
}


const addRecord = () => {
s
  const data1 = document.getElementById("in-1").value;
  const data2 = document.getElementById("in-2").value;
  const data3 = document.getElementById("in-3").value;

  document.getElementById("in-1").value = "";
  document.getElementById("in-2").value = "";
  document.getElementById("in-3").value = "";

  if(data1 !== ""){

    const record = new RecordConstructor(data1, data2, data3);
    reservations_db.push(record);
    console.log(reservations_db);

    document.getElementById("p1").innerHTML = `${data1} your ${data2} will be send to your email.`;

    setTimeout(() => {
      document.getElementById("p1").innerHTML = "Please provide information above then click RSVP";
    },4000);
  }
}
