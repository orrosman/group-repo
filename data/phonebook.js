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

function deletePerson(id) {
	const data = fs.readFileSync('./data/phonebook.json');
	const phonebook = JSON.parse(data);

	let index = 0;
	for (const person of phonebook.data) {
		if (person.id == id) {
			phonebook.data.splice(index, 1);
			fs.writeFileSync('./data/phonebook.json', JSON.stringify(phonebook));
			return `The person with ID ${id} was removed from phonebook`;
		}
	}
	return false;
}

module.exports = { getPhonebook, getPhonebookLength, getPerson, deletePerson };
