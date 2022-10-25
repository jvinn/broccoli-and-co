import '../styles.css';
import {useState} from "react";
import {postData} from '../API';

function InviteForm({isVisible, onComplete}) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [emailRepeated, setEmailRepeated] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		postData(name, email);
		onComplete();
	}

	return isVisible ? (
		<div className="popup">
			<form onSubmit={handleSubmit}>
				<div className="container">
					<label>Full Name</label>
					<input type="text" required onChange={(e) => setName(e.target.value)}/>
					<br />
					<label>Email</label>
					<input type="text" required onChange={(e) => setEmail(e.target.value)}/>
					<br />
					<label>Confirm Email</label>
					<input type="text" required onChange={(e) => setEmailRepeated(e.target.value)}/>
					<br />
					<button className="button">Submit</button>
				</div>
			</form>
		</div>
	) : "";
}

export default InviteForm;