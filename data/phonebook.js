const fs = require('fs');

function getPhonebook() {
	const data = fs.readFileSync('./data/phonebook.json');
	return data.toString();
}

module.exports = { getPhonebook };
