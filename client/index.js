import * as network from './network/network.js';

const phonelistDiv = document.querySelector('#phones-list');
const personDiv = document.querySelector('#person-section');
const addContactButton = document.querySelector('#add-contact');
const phoneList = document.createElement('ul');

const phonebookData = await network.getPhonebook();
for (const person of phonebookData) {
	const nameElement = document.createElement('li');
	nameElement.innerText = person.name;
	nameElement.addEventListener('click', async () => {
		event.preventDefault();
		const personObj = await getPerson(person.id);
		console.log(personObj);
		addPersonToPage(personObj);
	});

	const removedButton = document.createElement('span');
	removedButton.innerText = '❌';
	removedButton.addEventListener('click', () => {
		event.preventDefault();
		console.log(event.target);
		network.removePerson(person.id);
	});
	nameElement.appendChild(removedButton);

	phoneList.appendChild(nameElement);
}
phonelistDiv.appendChild(phoneList);

async function getPerson(id) {
	const personData = await network.getPerson(id);
	return personData;
}

function addPersonToPage(person) {
	if (personDiv.firstChild) {
		while (personDiv.firstChild) {
			personDiv.removeChild(personDiv.firstChild);
		}
	}
	for (const property of Object.values(person)) {
		const propertyElement = document.createElement('div');
		propertyElement.innerText = property;
		personDiv.appendChild(propertyElement);
	}
}

addContactButton.addEventListener('click', async () => {
	event.preventDefault();
	const nameInput = document.querySelector('#name-input').value;
	const numberInput = document.querySelector('#number-input').value;

	const response = await network.addPerson(nameInput, numberInput);
	console.log(response);
});
