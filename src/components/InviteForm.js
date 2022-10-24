import '../styles.css';

function InviteForm({isVisible}) {
	return isVisible ? (
		<div className="popup">
			<text>Invite Form</text>
		</div>
	) : "";
}

export default InviteForm;