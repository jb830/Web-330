/*
============================================
; Title:  brumfield-3.3.js 
; Author: Professor Krasso
; Date: 11 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates Singleton Pattern
;===========================================
*/

var DatabaseSingleton = (function () {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
function databaseInit() {
  var databaseInstance1 = DatabaseSingleton.getInstance();
  var databaseInstance2 = DatabaseSingleton.getInstance();
  console.log(
    "One database instance? " + (databaseInstance1 === databaseInstance2)
  );
}
function databaseSingletonTest() {
  let dbInstance1 = DatabaseSingleton.getInstance();
  let dbInstance2 = DatabaseSingleton.getInstance();
  console.log('Matching databases? ' + (dbInstance1 === dbInstance2) );
};
databaseInit();
databaseSingletonTest();