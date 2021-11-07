const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/persons', (req, res) => {
	res.send('testing server');
});

app.listen(PORT, () => {
	console.log('server running💨');
});
