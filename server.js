const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const personsRouter = require('./routers/personsRouter');

app.use(cors());

app.use('/api/persons', personsRouter);

app.listen(PORT, () => {
	console.log('server running💨');
});
