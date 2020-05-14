/*
============================================
; Title:  brumfield-4.3.js 
; Author: Professor Krasso
; Date: 14 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates HTTP GET operation 
; using Jquery and AJAX
;===========================================
*/
// const header = require('../../brumfield-header.js');
// console.log(header.display('Joanna', 'Brumfield', 'Exercise 4.3')+ '\n');

$(document).ready(function() {
  $('#showDogBtn').click(function() {
    $.get('https://dog.ceo/api/breeds/image/random', function(data, status) {
      console.log('Data: ' + JSON.stringify(data) + '\nStatus: ' + status);
    });
  });
});