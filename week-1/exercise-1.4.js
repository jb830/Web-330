var header = require('../brumfield-header.js');
console.log(header.display('Joanna', 'Brumfield', 'Exercise 1.4')+ '\n');
/*
============================================
; Title:  exercise-1.4.js 
; Author: Professor Krasso
; Date: 27 April, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates JavaScript 
; interface design using "Duck Typing"
;===========================================
*/
//Vehicle constructor functions 
function Car (model) {
  this.model = model;
};
function Truck (model, year) {
  this.model = model;
  this.year = year;
};
function Jeep (model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
};
//vehicle prototype messages
Car.prototype.start = function() {
  console.log(this.model + ' added to the racetrack!');
};
Truck.prototype.start = function() {
  console.log(this.model + ' added to the racetrack!');
};
Jeep.prototype.start = function() {
  console.log(this.model + ' added to the racetrack!');
};
//empty raceTrack array 
let raceTrack = [];
//function that takes a vehicle as a parameter and pushes it into the raceTrack array
function driveIt(vehicle) {
  vehicle.start();
  raceTrack.push(vehicle);
};
//initializing vehicle objects
const jeep1 = new Jeep('Jeep Wrangler', 1997, 'Green');
const truck1 = new Truck('Dodge Ram', 2020);
const car1 = new Car('Subaru Outback');
//pushing vehicle objects to raceTrack array
driveIt(jeep1);
driveIt(car1);
driveIt(truck1);

console.log("\n-- The following vehicles have been added to the racetrack --\n");
for (let i = 0; i < raceTrack.length; i++) {
  console.log(raceTrack[i].constructor.name + ': ' + raceTrack[i].model);
};