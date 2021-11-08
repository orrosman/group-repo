const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const personsRouter = require('./routers/personsRouter');
const Phonebook = require('./data/phonebook');
const errorHandler = require('./middleware/errorHandler');
const morgan = require('morgan');

app.use(cors());
app.use(express.json());

morgan.token('body', (req) => {
	return JSON.stringify(req.body);
});
app.use(
	morgan(':method :url :status :res[content-length] - :response-time ms :body')
);

app.use('/api/persons', personsRouter);
app.use('/info', async (req, res) => {
	const length = Phonebook.getPhonebookLength();

	res.send(`Phonebook has info for ${length} people ${new Date(Date.now())}`);
});

app.use('/', express.static(path.resolve('./client'))); // serve main path as static dir
app.get('/', function (req, res) {
	// serve main path as static file
	res.sendFile(path.resolve('./client/index.html'));
});

app.use(errorHandler);

app.listen(PORT, () => {
	console.log('server running💨');
});
