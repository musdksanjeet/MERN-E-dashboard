const express = require('express');
const cors = require('cors');
const con = require('./db/config');


const app = express();
app.use(express.json());
app.use(cors());


// Register API
app.post('/register', (req, res) => {
	const { name, email, password } = req.body; 
  
	if (!name || !email || !password) {
	  return res.status(400).send({ success: false, error: 'Name, Email, and Password are required!' });
	}
  
	const sql = 'INSERT INTO users (name, email, password) VALUES (?,?,?)';
	con.query(sql, [name, email, password], function (err, result) {
	  if (err) {
		return res.status(500).send({ success: false, error: 'Error inserting record', details: err });
	  }
	  res.status(200).send({ success: true, message: '1 record inserted', result });
	});
});


app.listen(5000);