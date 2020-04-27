var header = require('../brumfield-header.js');
console.log(header.display('Joanna', 'Brumfield', 'Exercise 1.3')+ '\n');
/*
============================================
; Title:  exercise-1.3.js 
; Author: Professor Krasso
; Date: 27 April, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates creation of
; JavaScript classes
;===========================================
*/
function CellPhone (manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  this.getPrice = function() {
    return this.price;
  };
  
  this.getModel = function() {
    return this.model;
  };
  
  this.getDetails = function() {
    console.log(' -- DISPLAYING CELL PHONE DETAILS --\n' + 'Manufacturer: ' + this.manufacturer 
                + '\n' + 'Model: ' + this.getModel() + '\n'  + 'Color: ' + this.color + '\n' 
                + 'Price: ' + this.getPrice());
  };
}; 

const phone1 = new CellPhone('Apple', 'Iphone 10', 'Black', 1000)

phone1.getDetails();
