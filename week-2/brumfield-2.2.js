/*
============================================
; Title:  brumfield-2.2.js 
; Author: Professor Krasso
; Date: 6 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates JavaScript 
; Prototypal Pattern using object literals
;===========================================
*/
const header = require('../brumfield-header.js');
//define person object literal with age function that can be 
//reused to get data from other objects
const person = {
  getAge: function() {
    return this.age;
  }
};
//create an "instance" of the person object and use methods from the person object
//to do useful things 
let person1 = Object.create( person, {
  'age': 
    {
      'value': 1000
    },
  'fullName':
    {
      'value': 'Bleep Boop'
    }
});

console.log('Hello: ' + person1.fullName);
console.log('Today you are: ' + person1.getAge() + ' today!');



