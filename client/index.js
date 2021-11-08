import * as network from './network/network.js';

const phonelistDiv = document.querySelector('#phones-list');
const phoneList = document.createElement('ul');

const phonebookData = await network.getPhonebook();
for (const person of phonebookData) {
	const nameElement = document.createElement('li');
	nameElement.innerText = person.name;
	phoneList.appendChild(nameElement);
}
phonelistDiv.appendChild(phoneList);
