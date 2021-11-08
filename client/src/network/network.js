const SERVER_URL = 'https://hidden-beach-46824.herokuapp.com';

export async function getPhonebook() {
	try {
		const response = await axios.get(`${SERVER_URL}/api/persons`);
		return response.data;
	} catch (e) {
		console.log(e);
	}
}

export async function getPerson(id) {
	try {
		const response = await axios.get(`${SERVER_URL}/api/persons/${id}`);
		return response.data;
	} catch (e) {
		console.log(e);
	}
}

export async function addPerson(name, number) {
	try {
		const response = await axios.post(`${SERVER_URL}/api/persons`, {
			name: name,
			number: number,
		});
		return response.data;
	} catch (e) {
		console.log(e);
	}
}

export async function removePerson(id) {
	try {
		const response = await axios.delete(`${SERVER_URL}/api/persons/${id}`);
		return response.data;
	} catch (e) {
		console.log(e);
	}
}
