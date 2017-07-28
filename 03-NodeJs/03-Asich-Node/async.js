
function printInTwoSeconds (message){
  console.log("Time: 0");
  setTimeout(() => { console.log("Time: 1") }, 1000);
  setTimeout(() => { console.log(message); }, 2000);
}

printInTwoSeconds("Hello Edmundo");
