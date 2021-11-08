const fs = require('fs');

function getPhonebook() {
	const data = fs.readFileSync('./data/phonebook.json');
	return JSON.parse(data);
}

function getPhonebookLength() {
	const data = fs.readFileSync('./data/phonebook.json');
	const phonebook = JSON.parse(data);
	return phonebook.data.length;
}

module.exports = { getPhonebook, getPhonebookLength };
