const express = require('express');
const app = express();

app.get('/',(req,resp)=>{
	resp.send('NodeJs Start');
});

app.listen(5000);