const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const personsRouter = require('./routers/personsRouter');
const Phonebook = require('./data/phonebook');
const errorHandler = require('./middleware/errorHandler');
const morgan = require('morgan');

app.use(cors());
app.use(express.json());

app.use(morgan('tiny'));

app.use('/api/persons', personsRouter);
app.use('/info', async (req, res) => {
	const length = Phonebook.getPhonebookLength();

	res.send(`Phonebook has info for ${length} people ${new Date(Date.now())}`);
});

app.use(errorHandler);

app.listen(PORT, () => {
	console.log('server running💨');
});
