import '../styles.css';
import {useState} from "react";
import axios from "axios";

function InviteForm({isVisible, onSuccess, onError}) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [emailRepeated, setEmailRepeated] = useState("");

	async function postData(name, email) {
		const endpoint = 'https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth';
		await axios.post(endpoint, {
			name: name,
			email: email
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		if(email !== emailRepeated) {
			onError("Emails don't match");
		}
		else if(name.length < 3) {
			onError("Name must be at least 3 characters long");
		}
		else {
			postData(name, email).then(() => onSuccess()).catch(err => {
				onError(err.response);
			});
		}
	}

	return isVisible ? (
		<div className="popup">
			<form onSubmit={handleSubmit}>
				<div className="container">
					<label>Full Name</label>
					<input type="text" required onChange={(e) => setName(e.target.value)}/>
					<br />
					<label>Email</label>
					<input type="email" required onChange={(e) => setEmail(e.target.value)}/>
					<br />
					<label>Confirm Email</label>
					<input type="email" required onChange={(e) => setEmailRepeated(e.target.value)}/>
					<br />
					<button className="button">Submit</button>
				</div>
			</form>
		</div>
	) : "";
}

export default InviteForm;