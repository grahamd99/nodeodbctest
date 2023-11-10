// Import the odbc module
const odbc = require('odbc');

// Load environment variables from .env
require('dotenv').config()
//require('dotenv').config({path: __dirname + '/.env'})
var fs = require('fs');
const json2csv = require('json2csv').parse;

const connectionString = 'DRIVER={' + process.env.DRIVER + '};SERVER=' + process.env.SERVER + ';DATABASE=' + process.env.DATABASE + ';Username=' + process.env.USERNAME + ';Password=' + process.env.PASSWORD;

// Connect to the database
odbc.connect(connectionString, (error, connection) => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }

  // Execute a simple query
    connection.query(process.env.SQLQUERY, (error, result) => {
    if (error) {
      console.error('Error executing the query:', error);
      return;
    }

    // Display the query result
    console.log('Query Result:', result);

    // Close the connection
    connection.close((error) => {
      if (error) {
        console.error('Error closing the connection:', error);
      } else {
        console.log('Connection closed.');
      }
    });
  });
});
