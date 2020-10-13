const express = require("express");
const mysql = require("mysql");
const inquirer = require('inquirer');

// Create connection

const db = mysql.createConnection({

	host: "localhost",
  
	user: "root",
  
	password: "rootroot",
  
	database: "employees",
  
  });
  // Connect to MySQL

db.connect((err) => {

	if (err) {
  
	  throw err;
  
	}
  
	console.log("MySql Connected");
  
  });
  
  const app = express();
  
  // Create DB

app.get("/createdb", (req, res) => {

	let sql = "CREATE DATABASE nodemysql";
  
	db.query(sql, (err) => {
  
	  if (err) {
  
		throw err;
  
	  }
  
	  res.send("Database created");
  
	});
  
  });
// Create table

app.get("/createemployee", (req, res) => {

	let sql =
  
	  "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";
  
	db.query(sql, (err) => {
  
	  if (err) {
  
		throw err;
  
	  }
  
	  res.send("Employee table created");
  
	});
  
  });
  // Update employee

app.get("/updateemployee/:id", (req, res) => {

	let newName = "Updated name";
  
	let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`;
  
	let query = db.query(sql, (err) => {
  
	  if (err) {
  
		throw err;
  
	  }
  
	  res.send("Post updated...");
  
	});
  
  });

// Define the MySQL connection parameters

  // Create DB

// app.get("/createdb", (req, res) => {

// 	let sql = "CREATE DATABASE nodemysql";
  
// 	db.query(sql, (err) => {
  
// 	  if (err) {
  
// 		throw err;
  
// 	  }
  
// 	  res.send("Database created");
  
// 	});
  
//   });
  
  
  
  
  

// const addRole = () => {
// 	inquirer
// 	.prompt({
// 		type:
// 		"input",
// 		name: addRole,
// 		message
// 	})
// }
// Alter this file as needed to match our requirements
// var mysql = require('mysql');
// var inquirer = require('inquirer');
// Export the connection so that we may use this in other parts of our program

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "rootroot",
//     database: "employees"
//   });
  
  // connect to the mysql server and sql database
//   connection.connect(function(err) {
//     if (err) throw err;
    // run the start function after the connection is made to prompt the user
    // start();
//   });
//   connection.changeUser({user : 'john'}, function(err) {
//     if (err) throw err;
//   });
//   connection.query('SELECT * FROM `books` WHERE `author` = "David"', function (error, results, fields) {
//     // error will be an Error if one occurred during the query
//     // results will contain the results of the query
//     // fields will contain information about the returned results fields (if any)
//   });