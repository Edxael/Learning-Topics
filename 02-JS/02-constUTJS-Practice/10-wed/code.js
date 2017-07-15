
// Docs Location: https://gist.github.com/allenwb/53927e46b31564168a1d

const invites_db = [];

class Iv{
  constructor(data1, data2, data3){
    this.name = data1;
    this.invites = data2;
    this.email = data3;
  }
}


const addRSVP = () => {
  const data1 = document.getElementById("in-1").value;
  const data2 = document.getElementById("in-2").value;
  const data3 = document.getElementById("in-3").value;

  document.getElementById("in-1").value = "";
  document.getElementById("in-2").value = "";
  document.getElementById("in-3").value = "";

  if(data1 !== ""){
    invites_db.push(new Iv(data1, data2, data3));

    document.getElementById("p1").innerHTML = `${data1} your ${data2} invites will be send to your E-Mail`

    setTimeout(() => {
      document.getElementById("p1").innerHTML = `Please provide information above and click RSVP.`;
    }, 4500);

    console.log(invites_db);
  }

}
