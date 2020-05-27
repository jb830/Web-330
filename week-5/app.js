/*
============================================
; Title:  brumfield-5.2.js 
; Author: Professor Krasso
; Date: 27 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates Proxy pattern
; with jQuery
;===========================================
*/
// const header = require('../brumfield-header.js');
// console.log(header.display('Joanna', 'Brumfield', 'Exercise 5.2')+ '\n');

//object dog
const dog = {
  name: 'Sprout',
  breed: 'Chimo',
  age: 5,
  favFood: 'Carrots',
  //display function that creates and clears object from html span
  display: function() {
    $('#showDog').html("");
    $('#showDog').append('<br>Name: ' + this.name + '<br>Breed: ' +
      this.breed + '<br>Age: ' + this.age + '<br>Favorite Food: ' +
      this.favFood
    );

  }
};
//event listener 
$('#btn').click($.proxy(dog, 'display'));
