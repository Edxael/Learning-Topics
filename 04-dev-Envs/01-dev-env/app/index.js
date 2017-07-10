console.log("Hello from index.js in folder: app");


// var root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

// fetch(root, { method: "GET"})
fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((err) => console.log(err));
// ------------------------------------
