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

// Login ApI
app.post('/login',(req,res)=>{
	const {email,password} = req.body;

	if(!email || !password)
	{
		return res.status(400).send({success:false,error:'Email and Password are required!'});
	}
	const sql = 'SELECT * FROM users WHERE email = ? and password= ?';
	con.query(sql,[email,password],function(err,result){
		if(err)
		{
			return res.status(500).send({success : false, error: 'Database error', details: err });
		}
		if(result.length===0)
		{
			return res.status(400).send({ success: false, error: 'Invalid email or password!' });
		}

		const user = result[0];
		const { password, ...userWithoutPassword } = user;

		return res.status(200).send({
			success: true,
			message: 'Login successful!',
			user: userWithoutPassword
		});
	});
});


app.listen(5000);