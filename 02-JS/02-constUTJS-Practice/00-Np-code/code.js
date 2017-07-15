console.log("Hello World");

// what is construction worker?
// what does he/she do?
// what guidelines does use?
//
// what is a robot?
// can a robot be a constrctrion robot?


function CarConst(data1, dog, avenger){
  this.make = data1;
  this.model = dog;
  this.year = avenger;
}

let car1 = new CarConst("Acura", "Integra", 1997);
console.log(car1);

let car2 = new CarConst("Chevrolet", "Malibu", 2000);
console.log(car2);
