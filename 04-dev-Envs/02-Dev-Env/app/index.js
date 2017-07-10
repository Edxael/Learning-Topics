console.log("Hello from index.js in folder: app 7");

var myHttp = new XMLHttpRequest();
myHttp.open("GET", 'data.json', true);
console.log(myHttp);

myHttp.send();


myHttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    console.log(myHttp.responseText);

    var response = JSON.parse(myHttp.responseText);
    console.log(response);
    console.log(response.bands.length);

    var output = "";
    for(var x = 0; x < response.bands.length; x++){
      output += "<p>" + response.bands[x].name + " have " + response.bands[x].members + " players." + "</p>";
    }
    document.getElementById("root").innerHTML = output;

  }
};
