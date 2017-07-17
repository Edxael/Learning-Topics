
class myConst {
  constructor(x, y, z){
    this.name = x;
    this.country = y;
    this.song = z;
  }
}


let x = "G.E.M.";
let x = "China";
let x = "Ligth Years Away";

let singer = new myConst(x, y, z);

console.log(singer);

    {
      name: "G.E.M.",
      country: "China",
      song: "Ligth Years Away"
    }





Singers


Alizée
France
Moi...lolita


Eros Ramazzotti
Italy
Più bella cosa



function myConstructor(a, b, c){

  this.name = a;
  this.country = b;
  this.song = c;

}


let a = "Mad Clown";
let b = "South Korea";
let c = "Fire";

let singer = new myConstructor(a, b, c);


console.log(singer);

    {
      name: "Mad Clown",
      country: "South Korea",
      song: "Fire"
    }






let myObject = {
  name: "Ayumi",
  lname: "Hamasaki",
  age: 38
  country: "Japan",
  singer: true,
  favSongs: ["Memmorial address", "Who", "Beloved"]
}
