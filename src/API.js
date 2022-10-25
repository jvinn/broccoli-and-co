import axios from "axios";

export async function postData(name, email) {
	const testEndpoint = 'https://reqres.in/api/register'
	const realEndpoint = 'https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth';
	axios.post(realEndpoint, {
		name: name,
		email: email
	}).then(r => console.log(r));
}