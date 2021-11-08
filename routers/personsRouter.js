const express = require('express');
const router = express.Router();

const Phonebook = require('../data/phonebook');

router.get('/', (req, res) => {
	const phonebook = Phonebook.getPhonebook();

	res.send(phonebook.data);
});

module.exports = router;
