// API Call for London:
// http://api.openweathermap.org/data/2.5/weather?appid=ddba629e3faea9cf22311faf76f33951&q=London,uk&units=imperial

var request = require('request');
// var url = 'http://api.openweathermap.org/data/2.5/weather?appid=ddba629e3faea9cf22311faf76f33951&q=London,uk&units=imperial';
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=ddba629e3faea9cf22311faf76f33951&q=Salt_Lake_City,us&units=imperial';
var clima = require('./02-weather.js');

clima();

// request({url: url, json: true}, function(error, response, body){
//   if(error){
//     console.log("Unable to fetch weather.");
//   } else{
//
//     var data = JSON.stringify(body, null, 4);
//     data = JSON.parse(data);
//
//     console.log(`The temperature in ${data.name} is ${data.main.temp} F. degrees. `);
//
//   }
//
// });
//
// console.log("caricaturas");
