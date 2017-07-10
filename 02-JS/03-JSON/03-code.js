
console.log("Hello from 03-code.js");
console.log("");


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    // console.log(xhttp.responseText);

    var response = JSON.parse(xhttp.responseText);
    console.log(response);
    // console.log(response.bands.length);

    var output = "";
    for(x = 0; x < response.bands.length; x++){
      output += "<p>" + response.bands[x].name + " have " + response.bands[x].members + " players." + "</p>";
    }
    document.getElementById("singers").innerHTML = output;

  }
};

xhttp.open("GET", "data.json", true);
xhttp.send();
