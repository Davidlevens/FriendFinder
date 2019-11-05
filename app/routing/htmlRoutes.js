const path = require('path');
const mysql = require("mysql");

// This is for the MySQL connection
// const connection = require("../routing/connection.js");

module.exports = (app) => {
	
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	app.get('/survey', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};