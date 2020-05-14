/*
============================================
; Title:  brumfield-4.3.js 
; Author: Professor Krasso
; Date: 13 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates using object literals to 
; perform DELETE function with Jquery and AJAX 
;===========================================
*/
// const header = require('../../brumfield-header.js');
// console.log(header.display('Joanna', 'Brumfield', 'Exercise 4.3')+ '\n');

$(function() {
  $('#deleteBtn').click(function(){
    $.ajax({
      url: 'http://httpbin.org/delete',
      dataType: 'json',
      type: 'DELETE',
      data: 
      {
        firstName: 'Joanna',
        lastName: 'Brumfield',
        mother: true,
      },
        success: function(data, status) {
          console.log(
            'First Name: ' + data.form.firstName +
            '\n Last Name: ' + data.form.lastName +
            '\n Mother? ' + data.form.mother + 
            '\n Status: ' + status 
          );
      }
    });
  });
});