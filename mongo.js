const mongoose = require('mongoose');
require('dotenv').config();
// const password = process.env.MONGO_PASSWORD;

if (process.argv.length < 3) {
	console.log(
		'Please provide the password as an argument: node mongo.js <password>'
	);
	process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://orrosman:${password}@cyber4s.wyltn.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url);

const contactSchema = new mongoose.Schema({
	name: String,
	number: String,
});

const Contact = mongoose.model('Contact', contactSchema);

if (process.argv[3]) {
	const contactName = process.argv[3];
	const contactNumber = process.argv[4];
	saveContact(contactName, contactNumber);
} else {
	getPhonebook();
}
function saveContact(name, number) {
	const contact = new Contact({
		name: name,
		number: number,
	});

	contact.save().then((result) => {
		console.log('contact saved!');
		mongoose.connection.close();
	});
}

function getPhonebook() {
	Contact.find({}).then((result) => {
		result.forEach((contact) => {
			console.log(contact.name, contact.number);
		});
		mongoose.connection.close();
	});
}
