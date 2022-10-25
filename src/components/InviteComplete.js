import '../styles.css';

function InviteComplete({isVisible, onComplete}) {
	return isVisible ? (
		<div className="popup">
			<table className="table">
				<text>All Done!</text>
				<br />
				<text>You will be one of the first to experience Broccoli & Co when we launch!</text>
				<br />
				<button className="button" onClick={onComplete}>OK</button>
			</table>
		</div>
	) : "";
}

export default InviteComplete;