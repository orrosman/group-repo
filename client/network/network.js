const SERVER_URL = 'http://localhost:3001';

export async function getPhonebook() {
	try {
		const response = await axios.get(`${SERVER_URL}/api/persons`);
		return response.data;
	} catch (e) {
		console.log(e);
	}
}
