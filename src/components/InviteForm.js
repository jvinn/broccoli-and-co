import '../styles.css';
import {useState} from "react";

function InviteForm({isVisible, onComplete}) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [emailRepeated, setEmailRepeated] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onComplete();
	}

	return isVisible ? (
		<div className="popup">
			<form onSubmit={handleSubmit}>
				<table className="table">
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
				</table>
			</form>
		</div>
	) : "";
}

export default InviteForm;