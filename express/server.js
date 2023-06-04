const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Create the MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',       // MySQL server hostname
  user: 'root',   // MySQL username
  password: '', // MySQL password
  database: 'buket' // MySQL database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');
});

// Create an Express application
const app = express();
app.use(cors());

// Define a route that queries the database
app.get('/testimoni', (req, res) => {
  connection.query('SELECT * FROM testimoni ', (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Error executing query' });
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(3500, () => {
  console.log('Server started on port 3500');
});
