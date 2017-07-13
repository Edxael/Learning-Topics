console.log("Hello from index.js in folder: app");


var root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

fetch(root, { method: 'GET'})
  .then((response) => response.json())
  // .then((data45) => console.log(data45.items[0].volumeInfo.title) );
  .then((data45) => document.getElementById("div1").innerHTML = data45.items[0].volumeInfo.title )
  .catch((err) => document.getElementById("div1").innerHTML = "Book Data Not available");
