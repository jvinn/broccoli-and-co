import '../styles.css';

function InviteComplete({isVisible}) {
	return isVisible ? (
		<div className="popup">
			<text>Invite Complete</text>
		</div>
	) : "";
}

export default InviteComplete;