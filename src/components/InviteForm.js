import '../styles.css';

function InviteForm({isVisible}) {
	const handleSubmit = (event) => {
		event.preventDefault();
		alert("Form submitted");
	}

	return isVisible ? (
		<div className="popup">
			<form onSubmit={handleSubmit}>
				<table className="table">
					<label>Full Name</label>
					<input type="text" required/>
					<label>Email</label>
					<input type="text" required />
					<label>Confirm Email</label>
					<input type="text" required />
				</table>
			</form>
		</div>
	) : "";
}

export default InviteForm;