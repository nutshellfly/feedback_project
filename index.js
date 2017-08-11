const express = require('express');

//Generate a express application
const app = express();


app.get('/', (req, res) => {
	res.send({hi: 'hello world!'});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);

