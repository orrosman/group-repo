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

function getPerson(id) {
	const data = fs.readFileSync('./data/phonebook.json');
	const phonebook = JSON.parse(data);
	for (const person of phonebook.data) {
		if (person.id == id) {
			return person;
		}
	}
	return false;
}

module.exports = { getPhonebook, getPhonebookLength, getPerson };
