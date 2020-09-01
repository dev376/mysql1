const mysql = require('mysql');
const author = { name: 'Craig Buckler', city: 'Exmouth' };

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: 'localhost',
  user: 'dev',
  password: 'Mbaki@!2345',
  database: 'practice',
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.query('SELECT * FROM sitepoint', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    console.log(rows);
  rows.forEach( (row) => {
    console.log(`${row.name} lives in ${row.city}`);
  });
});
con.query('INSERT INTO sitepoint SET ?', author, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});