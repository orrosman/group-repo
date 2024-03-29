import * as network from './network/network.js';

const phonelistDiv = document.querySelector('#phones-list');
const personDiv = document.querySelector('#person-section');
const addContactButton = document.querySelector('#add-contact');
const phoneList = document.createElement('ul');
phoneList.setAttribute('class', 'list-group');

const phonebookData = await network.getPhonebook();
for (const person of phonebookData) {
	const nameElement = document.createElement('li');
	nameElement.setAttribute(
		'class',
		'list-group-item d-flex justify-content-between align-items-center'
	);
	nameElement.innerText = person.name;
	nameElement.addEventListener('click', async () => {
		event.preventDefault();
		const personObj = await getPerson(person.id);
		addPersonToPage(personObj);
	});

	const removedButton = document.createElement('span');
	removedButton.setAttribute('class', 'badge');
	removedButton.innerText = '❌';
	removedButton.addEventListener('click', () => {
		event.preventDefault();
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
