/*
============================================
; Title:  brumfield-3.2.js 
; Author: Professor Krasso
; Date: 11 May, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates Factory Pattern
;===========================================
*/

function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}
function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}
function Oracle(properties) {
  this.username = properties.username || "user";
  this.password = properties.password || "userPswd";
  this.server = properties.server || "localhost:3030";
  this.version = properties.version || "19c";
}
function Informix(properties) {
  this.username = properties.username || "user";
  this.password = properties.password || "password";
  this.server = properties.server || "localhost: 3000";
}
function DatabaseFactory() {}
DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function (properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  } 
  if (properties.databaseType === "MySql") {
    this.databaseClass = MySql;
  }
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  }
  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret",
});

console.log(postgres instanceof Postgres);
console.log(postgres);

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password",
});
console.log(mySql instanceof MySql);
console.log(mySql);


let oracleFactory = new DatabaseFactory();
let oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "jo",
  password: "aVeryBigSecret",
});
console.log(oracle instanceof Oracle);
console.log(oracle);

let informixFactory = new DatabaseFactory();
let informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "me",
  password: "secret",
});
console.log(informix instanceof Informix);
console.log(informix);
